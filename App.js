import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

});

AppRegistry.registerComponent('App', () => App);