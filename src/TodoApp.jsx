import React from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, View, TouchableOpacity } from 'react-native'
import CheckBox from './CheckBox';
import { Icon } from 'react-native-elements'
import Data from '../dummyTodos'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

function TodoApp({ navigation }) {
    const [todo, setTodo] = useState(appStart());
    const route = useRoute()

    useEffect(() => {
        if (route.params?.params.text) {
            newId = uuidv4()
            newTodo = []
            todo.map(item => newTodo.push(item))
            newTodo.push({text: route.params.params.text, checkBox: route.params.params.check, id: newId})
            setTodo(newTodo)
        }
    }, [route.params]);

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
        navigation.navigate('Add Todo')
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
        <View style={styles.addTodoContainer}> 
            <TouchableOpacity onPress={addTodo}>
                <View style={styles.addTodos}>
                    <Icon name="add" color={'white'} />
                    <Text style={styles.text}>Add Todo</Text>
                </View>
            </TouchableOpacity>
        </View>
        {
            todos.length > 0 ? 
            <ScrollView style={styles.scrollview}>
                { todos }
            </ScrollView>
            :
            <View style={styles.emptyTodo}>
                <Text style={styles.headerText}>Please Add a Todo</Text>
            </View>
        }
        
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
    },
    emptyTodo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
  

export default TodoApp