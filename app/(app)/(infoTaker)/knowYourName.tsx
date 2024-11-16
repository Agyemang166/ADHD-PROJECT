import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from "../../../components/ProgressBar";
import { TextField } from "../../../components/TextField";
import { ElevatedButton } from "../../../components/ElevatedButton";
import { router } from "expo-router";

function KnowYourName() {
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState('');

  const handleFocus = () => setProgress(10);
  const handleTextChange = (text: string) => setName(text);

  const handleNextPress = () => {
    setProgress(10); 
    router.push("niceMeetingYou")
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}></View>
      <ProgressBar progress={progress} />

      <View style={styles.middleContent}>
        <Text style={styles.promptText}>
        What would you like ADHD app to call you
        </Text>
        <TextField
          label="Enter your name"
          value={name}
          onFocus={handleFocus}
          onChangeText={handleTextChange}
        />
      </View>


      <View style={styles.buttonContainer}>
        <ElevatedButton
          title="Next"
          onPress={handleNextPress}
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default KnowYourName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  progressBar: {
    marginTop: 50,
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center',

  },
  promptText: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: "#5F5F5F",
    marginBottom: 10,
    textAlign: 'center',
  },
  textField: {
    marginTop: 20,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});
