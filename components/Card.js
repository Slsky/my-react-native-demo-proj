import React from 'react'
import { View, StyleSheet } from 'react-native'

function Card(props) {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View >
    )
}

const styles = StyleSheet.create({
    card: {
        elevation: 6,

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,

        backgroundColor: 'white',
        borderRadius: 20
    },
})

export default Card