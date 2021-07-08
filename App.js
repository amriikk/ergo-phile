import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import PhotoGrid from './components/PhotoGrid';
import Header from './components/Header';
import Button from './components/Button';
import Bar from './components/Bar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Bar /> 
        <Button />
        <PhotoGrid />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slategrey',
  },

});

AppRegistry.registerComponent('App', () => App);