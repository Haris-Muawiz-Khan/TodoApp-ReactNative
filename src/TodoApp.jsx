import React from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, View, Alert, TouchableOpacity } from 'react-native'
import CheckBox from './CheckBox';
import { Icon } from 'react-native-elements'
import Data from '../dummyTodos'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const [todo, setTodo] = React.useState(appStart());

    function appStart() {
        newTodo = []
        Data.map(item => {
            const id = uuidv4()
            newTodo.push({...item, id:id})
        })
        return newTodo
    }
    function handleDelete(id) {
        newTodo = []
        todo.map(item => {
            if (item.id != id) {
                newTodo.push(item)
            }
        })
        setTodo(newTodo)
    }

    function handlePress(id) {
        setTodo(prevTodo => {
            retrun(prevTodo.map(item => {
                return(item.id === id ? {...item, checkBox: !item.checkBox} : item)
            }))
        })
    }

    function addTodo() {
        console.log("New Todo Added")
    }

    const todos = todo.map(item => {
        return (
            <CheckBox key={item.id} 
            isItChecked={item.checkBox} 
            handleDelete={()=> handleDelete(item.id)} 
            text={item.text} 
            handleOnPress={()=> handlePress(item.id)}
            />
        )
    })

    return (
      <SafeAreaView style={styles.AppContainer}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                TODO APP
            </Text>
        </View>
        <View style={styles.addTodoContainer}> 
            <TouchableOpacity onPress={addTodo}>
                <View style={styles.addTodos}>
                    <Icon name="add" color={'white'} />
                    <Text style={styles.text}>Add Todo</Text>
                </View>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollview}>
            {todos}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    AppContainer: {
        flex: 1,
        justifyContent: "center",
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
        width: '100%',
    },
    scrollview: {
        flex: 1,
    },
    header: {
        padding: 20,
        marginBottom: 5,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 1,
        fontFamily: 'Roboto',
    },
    addTodos: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#3282B8',
        height: 50,
        width: 120,
        borderRadius: 5,
    },
    text: {
        fontSize: 12,
        letterSpacing: 0.5,
        fontFamily: 'Roboto',
        color: 'white',
    },
    addTodoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
  

export default TodoApp