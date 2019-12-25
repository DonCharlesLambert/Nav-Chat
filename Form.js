import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native';

export default function Form() {
    return (
        <KeyboardAvoidingView behaviour="padding">
        <View style={styles.container}>
            <TextInput
                placeholder="username"
                placeholderTextColor='rgba(255, 255, 255, 0.2)'
                style={styles.textInput}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor='rgba(255, 255, 255, 0.2)'
                secureTextEntry
                style={styles.textInput}
            />
            <Button
                title="Login"
                onPress={() => this.props.navigation.navigate('Main')}
             />
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 300,
        height: 40,
        paddingHorizontal: 15,
        marginBottom: 15,
    }
});