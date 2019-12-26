import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

//Flatlist with key, key should be unique
const ListScreen = () => {
    const grocery = [
        {name: 'Apple', key: '1'}, 
        {name: 'Orange', key: '2'},
        {name: 'Tissue', key: '3'},
        {name: 'Milk', key:'4'},
        {name: 'Tea', key:'5'},
    ];
//Working with flatlist    
//Define dataprop - array of data used to create elements out of
//Define renderItem prop - fn that will turn each individual item into an eleemnt
//Define keyExtractor instead of providing key for individual list. 

return (
    <FlatList 
        data={grocery} 
        renderItem={({item})=> { //item: listobj
        return <Text>{item.name}</Text>
        }} 
    />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;

