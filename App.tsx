import React from 'react';
import TodoListScreen from './src/views/TodoListScreen';

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
  return <TodoListScreen />;
}

export default App;
