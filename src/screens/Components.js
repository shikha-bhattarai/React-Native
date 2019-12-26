import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import { paddedString } from 'uuid-js';

const ComponentsScreen = function (){
    const fname = <Text>Shikha</Text>
    return(<View>
        <Text style={styles.headerStyle}>Getting started with React Native!</Text>
        <Text style={styles.textStyle} >My name is {fname}</Text>
    </View>
    );
}; 

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});


export default ComponentsScreen;