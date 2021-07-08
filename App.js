import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import PhotoGrid from './components/PhotoGrid';
import Header from './components/Header';
import Bar from './components/Bar';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Bar />
        <PhotoGrid />
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