import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, TextInput, Button, Alert } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component{
  style = StyleSheet.create({
      container: {
          flex : 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
      },
  })

  render(){
    return(
        <View style={this.style.container}>
            <Image source={require('./nav.png')}></Image>
            <Navbox/>
            <MyBox/>
        </View>
    )
  }
}

class MyBox extends React.Component{
    render(){
        return(
            <View>
                <Image resizeMode="contain" source={require('./textbox.png')}/>
            </View>
        )
    }
}

class Navbox extends React.Component{
    render(){
        return(
            <View behaviour='position' style={this.props.style}>
                <Image resizeMode="contain" source={require('./navbox.png')}/>
            </View>
        )
    }
}
