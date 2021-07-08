import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground style={ styles.headerBackground } source={require('../img/electricity.gif')}>
        <View style={ styles.header }>
          <View style={ styles.profilePicWrap }>
            <Image style= { styles.profilePic } source={require('../img/zelfie.png')} />
          </View>
          <Text style={styles.name}>JHON TRUJILLO</Text>
          <Text style={styles.pos}> - software engineer - </Text>
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
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor:'rgba(0,0,0,0.4)',
    borderWidth: 10,
  },
  profilePic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
  },
  name: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 14,
    color: '#000080', //navy blue
    fontWeight: '300',
    fontStyle: 'italic'
  },
});

// AppRegistry.registerComponent('Header', () => Header); 