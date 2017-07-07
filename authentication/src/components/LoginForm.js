import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, InputField, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };


    onLoginClicked() {
        const { email, password } = this.state;
        //this.setState({ loading: true });
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSucess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSucess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ 
            loading: false,
            error: 'Authentication Failed.'
        });
    }

    onLoginSucess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={this.onLoginClicked.bind(this)}>
                Log In
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <InputField
                        label='email'
                        placeholder='user@gmail.com'
                        value={this.state.text}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <InputField
                        secureTextEntry
                        label='password'
                        value={this.state.text}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
