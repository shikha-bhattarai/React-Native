import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { WorldAlignment, setWorldAlignment } from 'expo/build/AR';

const HomeScreen = () => {
  //Simple button
  return(
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 
        onPress = {()=> console.log('Button Pressed')}
        title="Go to Components demo"/>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


