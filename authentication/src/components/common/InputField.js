import React from 'react';
import { Text, View, TextInput } from 'react-native';

const InputField = ({ value, onChangeText, label, placeholder, secureTextEntry }) => {

    const { textStyle, inputFieldStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
            <TextInput
                style={inputFieldStyle}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    textStyle: {
        flex: 1,
        paddingLeft: 20,
        fontSize: 18
    },

    inputFieldStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23, 
        flex: 2
    },

    containerStyle: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
};

export { InputField };

