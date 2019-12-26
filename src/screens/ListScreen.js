import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const grocery = [
        {name: 'Apple', price: '$1.90'},
        {name: 'Orange', price: '$0.99'},
        {name: 'Tissue', price: '$2.99'},
        {name: 'Milk', price: '$3.45'},
        {name: 'Tea', price: '$3.05'},
    ];
   
//Working with flatlist    
//Define dataprop - array of data used to create elements out of
//Define renderItem prop - fn that will turn each individual item into an eleemnt

return (
    <FlatList 
        //keyextractor using name as unique key
        keyExtractor = {(grocery) => grocery.name}
        //horizontal //or horizontal = {true}
        //showsHorizontalScrollIndicator = {false}
        data={grocery} 
        renderItem={({item})=> { //item: listobj
        return <Text style={styles.textStyle}>{item.name} - {item.price}</Text>
        }} 
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        //above and below margin
        marginVertical: 10
    }
});

export default ListScreen;

