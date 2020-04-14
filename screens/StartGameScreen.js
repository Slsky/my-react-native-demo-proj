import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Header from '../components/Header'
import Card from '../components/Card'


function StartGameScreen({ title }) {
    return (
        <View style={styles.screen}>
            <Text>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <TextInput placeholder="write numbers here!" />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => { alert("Reset B") }} />
                    <Button title="Confirm" onPress={() => { alert("Confirm B") }} />
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

})

export default StartGameScreen