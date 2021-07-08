import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import zelfie from './img/zelfie.png'
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image source={ zelfie } style={styles.image}></Image>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 460,
    borderRadius: 16,
  }
});

AppRegistry.registerComponent('App', () => App);