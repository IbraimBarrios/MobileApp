import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoListScreen from '../views/TodoListScreen';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';

const Routes = () => {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Login',
    screenOptions: { headerShown: false },
    screens: {
      Login: LoginScreen,
      Home: HomeScreen,
      TodoList: {
        screen: TodoListScreen,
        options: {
          headerTitle: 'Lista de tareas',
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
          headerShadowVisible: false,

          // se añade color al header
          // headerStyle: {
          //   backgroundColor: '#6200ee',
          // },
          // headerTintColor: 'white', // ⬅️ color del ícono de "back" y texto del título
          // headerTitleStyle: {
          //   fontWeight: 'bold', // opcional: personaliza el texto
          // },
        },
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
};

export default Routes;
