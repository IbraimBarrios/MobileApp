import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  Text,
  ListRenderItem,
} from 'react-native';

type Item = {
  text: string;
};

const TodoListScreen = () => {
  const [todoListData, setTodoListData] = useState<Item[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const handleChangeText = (text: string) => {
    setTodoText(text);
  };

  const handelButtonPress = () => {
    if (todoText.trim().length > 0) {
      setTodoListData(value => value.concat({ text: todoText }));
      setTodoText('');
    }
  };

  const handleRenderListItem: ListRenderItem<Item> = ({ item }) => {
    return <Text>{item.text}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View>
          <TextInput
            placeholder="Escribe tu palabra.."
            style={styles.input}
            placeholderTextColor="#C4C4C4"
            value={todoText}
            onChangeText={handleChangeText}
          />
          <Button title="Enter" onPress={handelButtonPress} />
        </View>
        <View>
          <FlatList
            data={todoListData}
            renderItem={handleRenderListItem}
            keyExtractor={item => item.text}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFB',
  },
  viewContainer: {
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
