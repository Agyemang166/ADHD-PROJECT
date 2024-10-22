import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'; // Import Image
import { Colors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import ProgressBar from '@/components/ProgressBar';



const DailyGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [progress, setProgress] = useState(25);
  const navigation = useNavigation();

  const goals = [
    { id: 1, time: '3 min/day', intensity: 'Casual' },
    { id: 2, time: '10 min/day', intensity: 'Regular' },
    { id: 3, time: '15 min/day', intensity: 'Serious' },
    { id: 4, time: '30 min/day', intensity: 'Intense' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Progress Bar */}
        <ProgressBar progress={progress} />
        
        {/* Image and Text */}
        <Image
          source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-duolingo-logo-icon-download-in-svg-png-gif-file-formats--symbol-brand-world-logos-vol-2-pack-icons-282167.png?f=webp&w=256' }}
          style={styles.icon}
        />
        <Text style={styles.chatText}>What are your daily lerning goals?</Text>
      </View>

      {/* Daily Goal Buttons */}
      {goals.map((goal) => (
        <TouchableOpacity
          key={goal.id}
          style={[
            styles.goalButton,
            selectedGoal === goal.id && styles.selectedGoalButton, // Change button color when selected
          ]}
          onPress={() => {
            setSelectedGoal(goal.id);
            setProgress(50);
          }}
        >
          <Text
            style={[
              styles.goalTimeText,
              selectedGoal === goal.id && styles.selectedGoalText
            ]}
          >
            {goal.time}
          </Text>
          <Text
            style={[
              styles.goalIntensityText,
              selectedGoal === goal.id && styles.selectedGoalText
            ]}
          >
            {goal.intensity}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedGoal !== null && styles.continueButtonActive, 
        ]}
        disabled={selectedGoal === null}
        onPress={() => navigation.navigate('reminderSetup')}
      >
        <Text
          style={[
            styles.continueButtonText,
            selectedGoal !== null && styles.continueButtonTextActive,
          ]}
        >
          I'm Commited
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyGoals;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  icon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop:20
  },
  chatText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 80,
  },
  goalButton: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
  },
  selectedGoalButton: {
    backgroundColor: Colors.light.buttonBackground, 
  },
  goalTimeText: {
    fontSize: 18,
    color: '#333',
  },
  goalIntensityText: {
    fontSize: 18,
    color: '#333',
  },
  selectedGoalText: {
    color: '#fff',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: Colors.light.buttonInactiveBackground, 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonActive: {
    backgroundColor: Colors.light.buttonBackground, 
  },
  continueButtonText: {
    fontSize: 16,
    color: Colors.light.buttonTextInactive, 
    fontWeight:'bold'
  },
  continueButtonTextActive: {
    color: '#fff', 
  },
});
