import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

export default class Bar extends Component {
    render() {
        return (
            <View styles={styles.bar}>
                <View style={[styles.barItem, styles.barSeperator]}>
                    <Text style={styles.barTop}>6</Text>
                    <Text style={styles.barBottom}>Pokémon</Text>
                </View>
                <View style={styles.barItem}>
                    <Text style={styles.barTop}>13 k</Text>
                    <Text style={styles.barBottom}>Victories</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#000080',
        borderTopWidth: 4,
        backgroundColor: '#ec2e4a',
        flexDirection: 'row'
    },
    barSeperator: {
        borderRightWidth: 4,
    },
    barItem: {
        flex: 1,
        padding: 18,
        alightItems: 'center'
    },
    barTop: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    barBottom: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});