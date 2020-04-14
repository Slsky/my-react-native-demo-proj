import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Header from '../components/Header'
import Card from '../components/Card'

import COLORS from '../constants/colors'


function StartGameScreen({ title }) {
    return (
        <View style={styles.screen}>
            <Text>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <TextInput placeholder="write numbers here!" />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={COLORS.accent} onPress={() => { alert("Reset B") }} /></View>
                    <View style={styles.button}><Button title="Confirm" color={COLORS.primary} onPress={() => { alert("Confirm B") }} /></View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: '2%',
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 16,
        alignSelf: "center"
    },
    inputContainer: {
        alignItems: "center",
        width: "80%",
        padding: "3%",
    },
    buttonContainer: {
        width: "100%",
        paddingVertical: "1%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        width: 100
    }
})

export default StartGameScreen