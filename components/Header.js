import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import COLORS from '../constants/colors'

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
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontWeight: "bold",
        color: "white"
    }
})

export default Header