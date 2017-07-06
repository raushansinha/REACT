import React, { Component } from 'react';
import { Button, Card, CardSection, InputField } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

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

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
