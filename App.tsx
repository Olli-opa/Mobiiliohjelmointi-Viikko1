import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [age, setAge] = useState<string>("")
  const ageAsNumber: number = 
    !isNaN(Number(age)) === true ? Number(age) : 0
  const lowerBpm: number = (220-ageAsNumber) * 0.65
  const upperBpm: number = (220-ageAsNumber) * 0.85
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <TextInput style={styles.text}
        placeholder="Enter age"
        keyboardType='numeric'
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.text}>Lower limit: {lowerBpm.toFixed(2)} bpm</Text>
      <Text style={styles.text}>Upper limit: {upperBpm.toFixed(2)} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 8,
    fontSize: 10
  },
  header: {
    fontSize: 28,
    marginTop: 45,
  },
  text: {
    fontSize: 20
  }
});
