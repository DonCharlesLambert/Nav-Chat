import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,
        KeyboardAvoidingView, TextInput, Button, ScrollView } from 'react-native';
import { getLyrics } from './Genius';

export default class NavBox extends React.Component{
    style=StyleSheet.create({
        text:{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '72%',
            height: '78%'
        }
    })

    state = {
        reply: "",
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props != nextProps) {
            this.sendMessage(nextProps)
        }
        return true
    }

    componentDidMount(){
      this.props.msg = "Boy Back Nav"
      this.sendMessage(this.props)
    }

    sendMessage = async (props) => {
        let recieved_msg = props.msg
        let reply = await getLyrics(recieved_msg);
        await this.setState({reply: reply})
    }

    render(){
        return(
            <View>
                <Image source={require('../assets/navbox.png')}/>
                <ScrollView style={this.style.text}>
                    <Text>{this.state.reply}</Text>
                </ScrollView>
            </View>
        )
    }
}