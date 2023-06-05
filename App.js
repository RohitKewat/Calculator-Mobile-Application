import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './components/test';

export default function App() {

  return (
    <View style={styles.container}>

      <Text>App is Running successfully</Text>
      <StatusBar style="light" />
    
             <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
