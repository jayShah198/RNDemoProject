import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button, TouchableOpacity, ColorPropType,
  Image
} from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isLoading: true }
      }
      didSelectLoginButton = () => 
      {
        this.props.navigation.navigate('Home')
      }
      render() {
      return (
        <View style={styles.container}>
            <Image
              style={styles.imageLogo}
              source={require('./Icon.png')}
            />
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="email"
                placeholderTextColor="white"
                onChangeText={text => this.setState({ email: text })} />
            </View>
            <View style={styles.inputView} >
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="password"
                placeholderTextColor="white"
                onChangeText={text => this.setState({ password: text })} />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={this.didSelectLoginButton}>
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
        </View>
      )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width: "100%",
      backgroundColor: "#8D33FF",
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
      width: "80%",
      backgroundColor: "black",
      height: 30,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
    },
    inputText: {
      height: 40,
      color: "white"
    },
    loginButton: {
      width: 120,
      backgroundColor: "black",
      borderRadius: 20,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 10,
      fontSize: 30
    },
    loginText: {
      color: "white",
      fontSize: 20,
      fontWeight: 'normal'
    }
  });