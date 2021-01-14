import { Assets } from '@react-navigation/stack';
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button, 
    TouchableOpacity, 
    ColorPropType
  } from 'react-native';

export default class ContactScreen extends Component {
    render() {
        return (
          <View style={{ height: '100%', backgroundColor: "#8D33FF" }}>
          <View style={{ flexDirection: 'row', height: '50%'}}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>Profile</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>My Account</Text>
              </View>

            </View>

          </View>

          <View style={{ flexDirection: 'row', height: '50%'}}>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>My Order</Text>
              </View>

            </View>

            <View style={styles.circleContainer}>
              <View style={styles.circle}>
              <Text style={styles.circleText}>My Cart</Text>
              </View>

            </View>

          </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    circleContainer: {
      width: '50%', 
      justifyContent: 'center',
      alignItems: 'center', 
      alignContent: 'center'
    },
    circle: {
      width: 120, 
      height: 120, 
      borderWidth: 1, 
      borderRadius: 60,
      borderColor: "black", 
      backgroundColor: '#FF3364',
      justifyContent : 'center'
    },
    circleText : {
      color: "black",
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18
    }
  });