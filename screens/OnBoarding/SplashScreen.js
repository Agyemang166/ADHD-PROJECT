import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADHD</Text>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F67A27',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40
    },
    title: {
        fontSize: 40,
        position: 'absolute',
        top: 300,
    }
})