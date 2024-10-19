import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();
  const courses = ['Maths', 'English', 'ICT', 'Science'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProgressBar initialProgress={progress} finalProgress={progress === 0 ? 0 : 20} />
        <Image
          source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-duolingo-logo-icon-download-in-svg-png-gif-file-formats--symbol-brand-world-logos-vol-2-pack-icons-282167.png?f=webp&w=256' }}
          style={styles.icon}
        />
        <Text style={styles.chatText}>What would you like to learn?</Text>
      </View>

      <View style={styles.coursesContainer}>
        {courses.map((course, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.courseButton,
              selectedCourse === course && styles.selectedButton,
            ]}
            onPress={() => {
              setSelectedCourse(course);
              setProgress(25); 
            }}
          >
            <Text
              style={[
                styles.courseText,
                selectedCourse === course && styles.selectedText,
              ]}
            >
              {course}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={[styles.chatText]}>Don't worry. You can choose more in your profile</Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        disabled={!selectedCourse} 
        onPress={() => navigation.navigate('dailyGoals')}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const { width } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 10,
    marginTop: 20,
  },
  chatText: {
    fontSize: 18,
    color: Colors.light.text,
    marginTop: 20,
  },
  coursesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  courseButton: {
    width: (width / 2) - 30, 
    height: (width / 2) - 30, 
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.light.buttonBackground,
  },
  courseText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: Colors.light.buttonBackground,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
