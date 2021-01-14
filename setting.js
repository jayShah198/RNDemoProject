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
  } from 'react-native';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Settings </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#8D33FF",
        justifyContent: 'center', 
        alignItems: 'center'
    }
});