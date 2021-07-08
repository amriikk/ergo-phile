import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';

export default class PhotoGrid extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.photoGrid}>
                    <View styles={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/articuno-0.jpeg')}></Image>
                    </View>
                    <View styles={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/gengar-0.jpeg')}></Image>
                    </View>
                    <View styles={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/rayquaza-0.jpeg')}></Image>
                    </View>
                    <View styles={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/totodile-0.jpeg')}></Image>
                    </View>
                    <View styles={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/blaziken-0.jpeg')}></Image>
                    </View>
                    <View styles={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../img/kyogre-0.jpeg')}></Image>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    photoWrap: {
        margin: 2,
        height: 120,
        width: (Dimensions.get('window').width / 2) - 4,
    },
    photo: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }
});