import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,
        KeyboardAvoidingView, TextInput, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import NavBox from './Scripts/NavBox'
import UserBox from './Scripts/UserBox'

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
             <Image source={require('./assets/title.png')} style={{height: '25%'}} resizeMode={'contain'}></Image>
             <Image source={require('./assets/nav.png')}></Image>
             <NavBox msg={this.state.userMsg}/>
             <UserBox send={this.transferMessage}/>
        </KeyboardAvoidingView>
    )
  }
}