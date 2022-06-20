import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = ({onSubmit}) => {

    const pressHandler = () => {
      onSubmit('testTodo')
    }
    return (
        <View style={styles.block}>
          <TextInput style={styles.input}/>
          <Button title="Добавить" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      allignItems: 'center',
      marginBottom: 15,

    },
    input :{  
      width: '70%',
      borderBottomColor: '#191',
      borderBottomWidth: 2 , 
      borderStyle: 'solid',
      padding: 10,
      marginBottom: 10
    },
    button: {
      color: 'red'
    }
})