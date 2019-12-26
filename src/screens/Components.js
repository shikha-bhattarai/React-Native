import React from 'react'; //how different componenet work together
import { Text, StyleSheet,View } from 'react-native'; //takes component and displays it
import { paddedString } from 'uuid-js';

//use function or arrow =>
const ComponentsScreen = function (){
   // const greeting = 'Hi there'; //you cant display javascript object inside text object.
    const fname = <Text>Shikha</Text> // use when you have conditional jsx
    return(<View>
        <Text style={styles.headerStyle}>Getting started with React Native!</Text>
        <Text style={styles.textStyle} >My name is {fname}</Text>
    </View>
    );
    //return some JSX (what we want to display in our app)
}; 

const styles = StyleSheet.create({
    //name anything you want
    headerStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});


export default ComponentsScreen;