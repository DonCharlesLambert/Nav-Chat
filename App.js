import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Button, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Login extends React.Component {
  static navigationOptions = {
    title: "Login",
    color: '#000',
  }

  state = {
    username: '',
    password: '',
  }

  onChangeText = (username) => {this.setState({username})};

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
          <KeyboardAvoidingView behaviour="padding">
            <View style={styles.formContainer}>
              <TextInput
                  placeholder="username"
                  placeholderTextColor='rgba(255, 255, 255, 0.2)'
                  onChangeText={this.onChangeText}
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
                  onPress={() => Enter(this)}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
    );
  }
}

function Enter(nav){
  Alert.alert("Welcome " + nav.state.username + " 😎");
  nav.props.navigation.navigate('Main');
}

class Main extends React.Component {
  static navigationOptions = {
    title: "Chats",
    color: '#000',
    backgroundColor: 'red',
  }
  render(){
    return (
        <View style={styles.mainContainer}>

        </View>
    );
  }
}

function Chat(){
  return (
      <View style={styles.previewContainer}>

      </View>
  );
}

const AppNavigator = createStackNavigator({
  Login,
  Main
});

export default createAppContainer(AppNavigator);

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
  },

  formContainer: {
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
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'
  },

  previewContainer: {
    height: 100,
    width: 330,
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
