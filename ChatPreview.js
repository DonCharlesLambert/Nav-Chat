import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Form from './Form'

export default function Preview(){
    return (
        <View style={styles.previewContainer}>

        </View>
    );
}

const styles = StyleSheet.create({
    previewContainer: {
        height: 100,
        width: 330,
        marginTop: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});