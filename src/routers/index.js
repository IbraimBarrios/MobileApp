import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoListScreen from '../views/TodoListScreen';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';

const Routes = () => {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Login',
    screens: {
      Login: LoginScreen,
      Home: HomeScreen,
      TodoList: TodoListScreen,
    }
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />
};

export default Routes;
