import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDGfabR7imUOSe6EGzATnJyclK7qsJZAfE',
            authDomain: 'authentication-f3ae9.firebaseapp.com',
            databaseURL: 'https://authentication-f3ae9.firebaseio.com',
            projectId: 'authentication-f3ae9',
            storageBucket: 'authentication-f3ae9.appspot.com',
            messagingSenderId: '926667460872'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out 
                            </Button>
                        </CardSection>
                    
                 );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerContainerStyle}>
                        <Spinner />
                    </View>
                );
        }   
    }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerContainerStyle: {
        height: 400,
        justifyContent: 'center'
    }
};

export default App;
