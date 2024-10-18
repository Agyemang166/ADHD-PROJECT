import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Colors } from '@/constants/Colors';

const ProgressBar = ({ progress }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the animation when the `progress` changes
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500, // 2 seconds for the animation
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progressBar, { width: widthInterpolated }]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 20, 
    width: '100%', 
    backgroundColor: '#e0e0df',
    borderRadius: 10, 
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%', 
    backgroundColor: Colors.light.buttonBackground, 
  },
});
