import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import ProgressBar from "../../../components/ProgressBar";
import { ElevatedButton } from "../../../components/ElevatedButton";
import NiceMeetingYouImg from "../../../assets/images/niceMeetingYouImg.png";
import ConfettiCannon from 'react-native-confetti-cannon';
import { router } from 'expo-router';

// Define the component's state types
type State = {
  progress: number;
  showConfetti: boolean;
};

const NiceMeetingYou: React.FC = () => {
  const [progress, setProgress] = useState<number>(10); // Typed state variable
  const [showConfetti, setShowConfetti] = useState<boolean>(true); // Typed state variable

  useEffect(() => {
    // Set a timer to stop confetti after 3 seconds and update progress
    const timer = setTimeout(() => {
      setShowConfetti(false); 
      setProgress(20);        
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <View style={styles.container}>
      {showConfetti && (
        <ConfettiCannon
          count={100}
          origin={{ x: 0, y: 0 }}
          fadeOut
        />
      )}
<View  style={styles.progressBar}></View>
      <ProgressBar progress={progress} />

      <View style={styles.middleContent}>
        <Text style={styles.promptText}>Nice to meet you Arnold</Text>
        <Image source={NiceMeetingYouImg} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <ElevatedButton
          title="Next"
          style={styles.button}
          onPress={() => router.push("/(app)/(infoTaker)/yourAge")}
        />
      </View>
    </View>
  );
};

export default NiceMeetingYou;

// StyleSheet with explicit types for styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  } as ViewStyle,
  progressBar: {
    marginTop: 50,
  } as ViewStyle,
  middleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  promptText: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#5F5F5F",
    backgroundColor: "#FAFAFA",
    borderColor: "#B0B0B0",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 20,
  } as TextStyle,
  image: {
    width: 119,
    height: 119,
    resizeMode: 'contain',
    marginBottom: 50,
  } as ImageStyle,
  buttonContainer: {
    width: '100%',
  } as ViewStyle,
  button: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 40,
  } as ViewStyle,
});
