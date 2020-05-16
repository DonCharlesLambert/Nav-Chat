import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,
        KeyboardAvoidingView, TextInput, Button, ScrollView } from 'react-native';
        
export default class MyBox extends React.Component{
    style=StyleSheet.create({
        text:{
            position: 'absolute',
            top: '34%',
            left: '8%',
            width: '70%',
        }
    })

    state = {
        text: "Tell me about Boy Back!"
    }

    render(){
        return(
            <View>
                <Image resizeMode="contain" source={require('../assets/textbox.png')}/>
                <ScrollView style={this.style.text}>
                    <TextInput
                        value = {this.state.text}
                        onChangeText={text => this.setState({text: text})}
                        onEndEditing={e => this.props.send(this.state.text)}
                    />
                </ScrollView>
            </View>
        )
    }
}