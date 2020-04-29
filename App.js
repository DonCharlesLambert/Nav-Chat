import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,
        KeyboardAvoidingView, TextInput, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { getLyrics } from 'genius-lyrics-api';


export default class App extends React.Component{
  style = StyleSheet.create({
      container: {
          flex : 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%'
      },
  })

  state = {
      userMsg: ""
  }

  transferMessage = (msg) => {
    this.setState({userMsg: msg})
  }

  render(){
    return(
        <KeyboardAvoidingView behavior="padding" style={this.style.container}>
             <Image source={require('./title.png')} style={{height: '25%'}} resizeMode={'contain'}></Image>
             <Image source={require('./nav.png')}></Image>
             <Navbox msg={this.state.userMsg}/>
             <MyBox send={this.transferMessage}/>
        </KeyboardAvoidingView>
    )
  }
}

class MyBox extends React.Component{
    style=StyleSheet.create({
        text:{
            position: 'absolute',
            top: '34%',
            left: '8%',
            width: '70%',
        }
    })

    render(){
        return(
            <View>
                <Image resizeMode="contain" source={require('./textbox.png')}/>
                <ScrollView style={this.style.text}>
                    <TextInput
                        value={"What is the chorus to Boy Back?"}
                        onChangeText={(text) => this.props.send(text)}
                    />
                </ScrollView>
            </View>
        )
    }
}

class Navbox extends React.Component{
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
        reply: "Got rackity-rack-rack-racks in my knapity-sack-sack-sack (yeah, racks)\n" +
            "Ever since Tap-Tap-Tap, I feel like the brown boy back-back-back (I'm back)\n" +
            "Prada shoes with the strap, in every color, I'm proud of that (proud of that)\n" +
            "All they see is success but they don't know where I started at\n" +
            "I can't take no days off, I got money I gotta get (no)\n" +
            "Hit the gas and I take off, pipes be cracklin' when I shift (skrrt)\n" +
            "It's clear as you can see, got a big bankroll on me (racks)\n" +
            "Got a coupe, got power seats, three months before release"
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props != nextProps) {
            this.sendMessage()
        }
        return true
    }

    sendMessage = () => {
        this.setState({reply: this.props.msg})
    }

    render(){
        return(
            <View>
                <Image resizeMode="contain" source={require('./navbox.png')}/>
                <ScrollView style={this.style.text}>
                    <Text>{this.state.reply}</Text>
                </ScrollView>
            </View>
        )
    }
}
