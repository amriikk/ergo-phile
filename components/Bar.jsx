import React, { Component } from 'react';
import { AppRegistry, Stylesheet, View, Text } from 'react-native';

export default class Bar extends Component {
    render() {
        return (
            <View styles={styles.bar}>
                <View style={[styles.barItem, styles.barSeperator]}>
                    <Text style={styles.barTop}>6</Text>
                    <Text style={styles.barBottom}>Pokémon</Text>
                </View>
                <View style={styles.barItem}>
                    <Text style={styles.barTop}>13k</Text>
                    <Text style={styles.barBottom}>Victories</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        backgroundColor: '#ec2c4a',
        flexDirection: 'row',
    },
});