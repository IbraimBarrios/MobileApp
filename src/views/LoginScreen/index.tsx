import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});

export default LoginScreen;
