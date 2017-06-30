import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDGfabR7imUOSe6EGzATnJyclK7qsJZAfE',
            authDomain: 'authentication-f3ae9.firebaseapp.com',
            databaseURL: 'https://authentication-f3ae9.firebaseio.com',
            projectId: 'authentication-f3ae9',
            storageBucket: 'authentication-f3ae9.appspot.com',
            messagingSenderId: '926667460872'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
