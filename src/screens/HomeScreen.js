import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { WorldAlignment, setWorldAlignment } from 'expo/build/AR';

//to reuse you can use ({navigation}) instad of props
const HomeScreen = (props) => {
  console.log(props.navigation);

  //Simple button
  return(
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 
        onPress = {()=> props.navigation.navigate('Components')}
        title="Go to Components demo"
      />
      <TouchableOpacity 
      onPress= {()=> props.navigation.navigate('List')}>
        <Text>Go to List</Text>
      </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


