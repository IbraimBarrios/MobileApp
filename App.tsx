import { StyleSheet, View } from 'react-native';

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
  return (
    <View style={[styles.container, styles.direction]}>
      <View style={[styles.redContainer, styles.column]} />
      <View style={[styles.darkorangeContainer, styles.column]} />
      <View style={[styles.greenContainer, styles.column]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  direction: { flexDirection: 'column' },
  column: { flex: 1 },
  redContainer: { backgroundColor: 'red' },
  darkorangeContainer: { backgroundColor: 'darkorange' },
  greenContainer: { backgroundColor: 'green' },
});

export default App;
