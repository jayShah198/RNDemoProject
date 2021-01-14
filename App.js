/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './login';
import HomeScreen from './home';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>RN Assignment</Text>
      <Text style={styles.smallTextContainer}>Jay Shah</Text>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.push("Login")}>
        <Text style={{color: "white", fontSize: 15}}>Click Here To Open App</Text>
      </TouchableOpacity>
      </View>
  );
}

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#8D33FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30
  },
  smallTextContainer: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15
  },
  startButton: {
    width: "70%",
    backgroundColor: "black",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  }
});
