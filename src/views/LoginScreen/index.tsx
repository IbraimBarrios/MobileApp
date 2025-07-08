import React from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View>
      <View style={styles.inputsContainer}>
        <TextInput placeholder="user" style={styles.textInput} />
        <TextInput
          placeholder="password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <Button color="#1976D2" title="Sing in" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 18,
    marginRight: 18,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  inputsContainer: {
    marginTop: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 6,
    marginTop: 4,
    marginBottom: 12,
    fontSize: 16,
  },
});

export default LoginScreen;
