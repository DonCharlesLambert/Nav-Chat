import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Preview from './ChatPreview'

export default class Main extends React.Component {
    static navigationOptions = {
        title: "Chats",
        color: '#000',
        backgroundColor: 'red',
    }
    render(){
        return (
            <View style={styles.mainContainer}>
                <Preview/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
});