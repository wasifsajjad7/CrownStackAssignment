import React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

export default function TodosItems({item,pressHandler}) {
    return(
        <TouchableOpacity onPress ={() => pressHandler(item.key,item.completed)}>
            <Text style = {[{textDecorationLine : item.completed?'line-through':''},styles.itemStyle]}>{item.text}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding:16,
    marginTop:16,
    borderColor : '#bbb',
    borderWidth : 1,
    borderStyle :'dashed',
    borderRadius:10
  }
});