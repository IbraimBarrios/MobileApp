import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const LoginScreen = () => {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState('');

  const handleUserTextChange = (text: string) => setUser(text);
  const handlePasswordTextChange = (text: string) => setPassword(text);

  const handleSingInPress = () => {
    if (user.trim().length > 0 && password.trim().length > 0) {
      if (user === 'facilito' && password === 'codigo123') {
        
      } else {
        Alert.alert('Error', 'El usuario y/o contraseña incorrectos');
      }
    } else {
      Alert.alert('Error', 'Debes ingresar usuario y contraseña');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="user"
          style={styles.textInput}
          onChangeText={handleUserTextChange}
          value={user}
        />
        <TextInput
          placeholder="password"
          style={styles.textInput}
          secureTextEntry
          onChangeText={handlePasswordTextChange}
          value={password}
        />
      </View>
      <Button color="#1976D2" title="Sing in" onPress={handleSingInPress} />
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
