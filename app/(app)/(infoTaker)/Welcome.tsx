import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { ElevatedButton } from '@/components/ElevatedButton';
import WelcomeImg from '../../../assets/images/welcomeImg.png';
import { router } from 'expo-router';

const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>      
      <View style={styles.imageContainer}>
        <Image source={WelcomeImg} style={styles.image} />
      </View>

      <View style={styles.buttonContainer}>
        <ElevatedButton
          title="Get Started"
          onPress={() => router.push("/(app)/(infoTaker)/knowYourName")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent:'space-around', 
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 50, 
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
});
