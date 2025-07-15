import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back, User!</Text>
        <Button
          title="Lista de tareas"
          onPress={() => navigation.navigate('TodoList')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#63A4FF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 12,
    paddingRight: 12,
  },
  image: {
    width: 35,
    height: 35,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 24 },
});

export default HomeScreen;
