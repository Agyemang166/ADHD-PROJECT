import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProgressBar from '../../components/ProgressBar';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';

const ReminderSetup = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(50);
  const navigation = useNavigation();

  const handleAllowPress = () => {
    if (selectedOption !== 'allow') {
      setSelectedOption('allow');
      setProgress(75);
    }
  };

  const handleDontAllowPress = () => {
    if (selectedOption !== 'dontAllow') {
      setSelectedOption('dontAllow');
      setProgress(75);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProgressBar progress={progress} />
        <Image
          source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-duolingo-logo-icon-download-in-svg-png-gif-file-formats--symbol-brand-world-logos-vol-2-pack-icons-282167.png?f=webp&w=256' }}
          style={styles.icon}
        />
        <Text style={styles.chatText}>I would remind you to learn every day</Text>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons name="bell" size={50} color="black" />
        <Text style={styles.promptText}>Allow ADHD to send you notifications?</Text>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOption === 'allow' ? styles.allowButtonActive : styles.allowButton,
          ]}
          onPress={handleAllowPress}
        >
          <Text style={styles.buttonText}>Allow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOption === 'dontAllow' ? styles.dontAllowButtonActive : styles.dontAllowButton,
          ]}
          onPress={handleDontAllowPress}
        >
          <Text style={styles.buttonText}>Don't Allow</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={[
          styles.continueButton, 
          !selectedOption && styles.continueButtonDisabled
        ]}
        disabled={!selectedOption} 
        onPress={() => navigation.navigate('NextScreen')}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReminderSetup;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    marginTop: 20,
  },
  chatText: {
    marginVertical: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginTop: 0,
  },
  promptText: {
    marginVertical: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5, 
    backgroundColor: '#d3d3d3', 
  },
  allowButton: {
    backgroundColor: '#A9A9A9', 
  },
  allowButtonActive: {
    backgroundColor: Colors.light.buttonBackground, 
  },
  dontAllowButton: {
    backgroundColor: '#d3d3d3',
  },
  dontAllowButtonActive: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: Colors.light.buttonBackground,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%', 
  },
  continueButtonDisabled: {
    backgroundColor: '#A9A9A9', 
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
