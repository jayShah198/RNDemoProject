import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button, TouchableOpacity, ColorPropType,
} from 'react-native';
import ContactScreen from './contact';
import AboutMeScreen from './about';
import SettingsScreen from './setting';


const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
  render() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="About" component={AboutMeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
}