import React from 'react'
import { Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, View, Alert, TouchableOpacity } from 'react-native'
import CheckBox from './CheckBox';
import { Icon } from 'react-native-elements';


function TodoApp() {
    const [checkboxState, setCheckboxState] = React.useState(false);
    
    function handleDelete(id) {
        console.log(`Todo with id: ${id} has been deleted.`)
    }

    function handlePress() {
        setCheckboxState(prevState => !prevState)
    }

    function addTodo() {
        console.log("New Todo Added")
    }

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
            <CheckBox id={1} 
            isItChecked={false} 
            handleDelete={handleDelete} 
            text={"Hello"} 
            handleOnPress={handlePress}
            />
            <CheckBox id={2} 
            isItChecked={false} 
            handleDelete={handleDelete} 
            text={"Hi"} 
            handleOnPress={handlePress}
            />
            <CheckBox id={3} 
            isItChecked={false} 
            handleDelete={handleDelete} 
            text={"Hola"} 
            handleOnPress={handlePress}
            />
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