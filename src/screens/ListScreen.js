import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const grocery = [
        {name: 'Apple'},
        {name: 'Orange'},
        {name: 'Tissue'},
        {name: 'Milk'},
        {name: 'Tea'},
    ];
//Working with flatlist    
//Define dataprop - array of data used to create elements out of
//Define renderItem prop - fn that will turn each individual item into an eleemnt

return (
    <FlatList 
        //keyextractor using name as unique key
        keyExtractor = {(grocery) => grocery.name}
        data={grocery} 
        renderItem={({item})=> { //item: listobj
        return <Text>{item.name}</Text>
        }} 
    />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;

