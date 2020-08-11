import React, { useState } from 'react';
import {View,StyleSheet, FlatList,Text } from 'react-native';
import TodosItems from './Todos';
import AddTodo from './AddTodo';

const HomeScreen = () =>{
  const [todos,setTodos] = useState([]);
  const [count,setCount] = useState(0);

    const pressHandler = (key,completed) => {
        
        {completed ? setCount(count-1) : setCount(count+1)}

        setTodos((prevTodos)=>{
            return prevTodos.map(todo => todo.key === key ? (completed ?{...todo, completed : false}:{...todo, completed : true})  : todo);
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

            <Text style = {styles.footerTextStyle}> Total todos remaining: {count} out of {todos.length}</Text>

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
      },footerTextStyle:{
        padding:16,
        marginTop:16,
        fontSize : 20
      }
});

export default HomeScreen;