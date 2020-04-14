import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '11%',
        paddingTop: "13%",
        backgroundColor: '#FF4040',
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontWeight: "bold",
        color: "white"
    }
})

export default Header