import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
  //   const newTodo = {
  //     id: Date.now().toString(),
  //     title: title
  //   }

    // setTodos(todos.concat([newTodo]))
    
    // setTodos((prevTodos)=> {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev =>[
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <View>
      <Navbar title = "TODO app"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map(todo => {
            return (
              // <Text key={todo.id}>{todo.title}</Text>
              <Todo todo={todo} key={todo.key} />
            )
          })}
        </View>
        {/* просто ссылка на ф-цюи, ее не вызываем */}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,


    // // flex: 1,
    // height:300,
    // backgroundColor: '#4ff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
