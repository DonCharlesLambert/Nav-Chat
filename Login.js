import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Form from './Form'

export default class Login extends React.Component {
    static navigationOptions = {
        title: "Login",
        color: '#000',
        backgroundColor: 'red',
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    NAV CHAT
                </Text>
                <Image
                    source={require('./img/nav.png')}
                    style={styles.logo}
                ></Image>
                <Form/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    description: {
        color: '#FFF',
        width: 140,
        textAlign: 'center',
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },

    title:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
    }
});