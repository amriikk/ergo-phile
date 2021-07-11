import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          onPress={() => alert('I pick you, Pokémon!')}
          style={{ backgroundColor: 'lightskyblue', width: 150, borderRadius: 8, alignSelf: 'center'}}>
          <Text style={{ fontSize: 16, color: 'navy', alignSelf: 'center'}}> Pick a Pokémon</Text>
        </TouchableOpacity>
        
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