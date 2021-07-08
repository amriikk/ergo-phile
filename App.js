import { AppRegistry, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <ImageBackground style={ styles.headerBackground } source={require('./img/electricity.gif')}>
        <View style={ styles.header }>
          <View style={ styles.profilePicWrap }>
            <Image style= { styles.profilePic } source={require('./img/zelfie.png')} />
          </View>
          <Text style={styles.name}>JHON TRUJILLO</Text>
          <Text style={styles.pos}> - SOFTWARE ENGINEER - </Text>
        </View>
      </ImageBackground>
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
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(130,190,240, 0.9)' //favorite sky blue color
  },
  profilePicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor:'rgba(0,0,0,0.4)',
    borderWidth: 10,
  },
  profilePic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff'
  },
  name: {

  },
  pos: {

  },
});

AppRegistry.registerComponent('App', () => App);