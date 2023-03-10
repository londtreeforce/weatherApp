import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading () {
    return( 
    <View style={styles.container}>
        <Text style={styles.text}>Получение погоды...</Text>
    </View>
);}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 50,
        backgroundColor: "#BB86FC"
        
    },
    text: {
        color: "#2c2c2c",
        fontSize: 25
    }
})