import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput 
      style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
      placeholder = 'Username...'/>
      <TextInput 
      style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
      placeholder = 'Password...'
      secureTextEntry={true} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
