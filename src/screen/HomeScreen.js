import React, { useState } from 'react';
import {View,StyleSheet, FlatList,Text } from 'react-native';
import TodosItems from './Todos';
import AddTodo from './AddTodo';

const HomeScreen = () =>{
  const [todos,setTodos] = useState([]);

    const pressHandler = (key,completed) => {
        setTodos((prevTodos)=>{
            return prevTodos.map(todo => todo.key == key ? completed ?{...todo, completed : false}:{...todo, completed : true}  : todo);
        })
    }

    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                {text:text, key: Math.random().toString(),completed : false},
                ...prevTodos
            ];
        })
    }

    return(
        <View style = {styles.container}> 
            <View style = {styles.content}>
             <AddTodo submitHandler = {submitHandler}/>
             </View>
            
            <FlatList data = {todos}
            renderItem={({ item }) => (<TodosItems item = {item}
               pressHandler = {pressHandler}
               keyExtractor={item => item.key}
             />)}
            padding={8}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },content:{
        padding:16,
        margin:16,
        borderColor : '#bbb',
        borderWidth : 1,
        borderRadius:10
      }
});

export default HomeScreen;