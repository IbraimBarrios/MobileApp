import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

// Esta es la estructura basica en CLI
// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (text: string) => {
    setValue(text);
  };

  const handleButtonPress = () => {
    //Enviarlo a una API

    /**
     * fetch("api", {user: value})
     */

    setValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={handleInputChange}
      />
      <Button title="Press me" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
