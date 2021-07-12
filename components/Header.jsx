import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground style={ styles.headerBackground } source={require('../img/electricity.gif')}>
        <View style={ styles.header }>
          <View style={ styles.profilePicWrap }>
            <Image style= { styles.profilePic } source={require('../img/selfie.png')} />
          </View>
          <Text style={styles.name}> J H O N  T R U J I L L O </Text>
          <Text style={styles.pos}> - software engineer - </Text>
          <br/>
          <View>
            <Text style={styles.info}>
                Self-motivated Software Engineer with cross-functional {'\n'} agility 
                and ability to independently lead and meet objectives {'\n'} in a fastpaced, 
                rapidly changing environment through analytical {'\n'}thinking and creative problem solving. 
            </Text>
          </View>
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
    backgroundColor: 'rgba(130,190,240,0.9)' //favorite sky blue color
  },
  profilePicWrap: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor:'rgba(0,0,0,0.4)',
    borderWidth: 13,
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
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  info: {
      fontSize: 10,
      padding: 8,
      alignSelf: 'center',
      backgroundColor: 'cyan',
      borderRadius: 8,
  }
});

// AppRegistry.registerComponent('Header', () => Header); 