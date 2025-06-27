import React, { useState } from 'react';
import { ScrollView, View, TextInput, StyleSheet, Button } from 'react-native';

const TodoListScreen = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const handleChangeText = (text: string) => {
    setTodoText(text);
  };

  const handelButtonPress = () => {
    if (todoText.trim().length > 0) {
      setTodoList((value) => value.concat(todoText));
      setTodoText("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Search..."
          style={styles.input}
          placeholderTextColor="#C4C4C4"
          value={todoText}
          onChangeText={handleChangeText}
        />
        <Button title="Enter" onPress={handelButtonPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFB',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: 40,
    color: '#212121',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default TodoListScreen;
