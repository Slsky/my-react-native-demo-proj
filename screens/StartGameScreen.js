import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'

function StartGameScreen({ title }) {
    return (
        <View style={styles.screen}>
            <Text>The Game Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },

})

export default StartGameScreen