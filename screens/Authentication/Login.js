import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';


const OnBoardingOne = () => {
    const backimage = require('../../assets/bgrmove.png');
  return (
    <GestureHandlerRootView>
        <View style={styles.container}>
      <View style={styles.heading1Container}>
        <Text style={styles.heading1}>ADHD</Text>
      </View>
      <View styles={styles.backgroundImageheading2Container}>
        <Text style={styles.heading2a}>Welcome</Text>
        <Text style={styles.heading2b}>back</Text>
      </View>
      <View style={styles.imageContainer}>
      <ImageBackground 
            source={backimage}
            style={styles.backgroundImage}
            resizeMode='cover'
        >
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Let's get you started</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
      
    </View>
    </GestureHandlerRootView>
  );
}

export default OnBoardingOne;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
    },
    heading1Container:{
        marginTop: 10,
        marginBottom: 12,

    },
    heading1:{
        color: '#F67A27',
        fontSize: 24,
    },
    backgroundImageheading2Container:{
        marginBottom: 10,
    },
    heading2a:{
        color: '#FFFFFF',
        fontSize: 36
    },
    heading2b:{
        color: '#FFFFFF',
        fontSize: 36
    },
    imageContainer: {
     flex: 1,
     justifyContent: 'flex-end'
    },
    backgroundImage:{
        bottom: 0,
        width: 391,
        height: 586,
        justifyContent: "flex-end"
    },
    button:{
        backgroundColor: '#F67A27',
        borderRadius: 10,
        padding: 15,
        width: 358,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto',
        bottom: 25,
    },
    buttonText: {
        fontSize: 16
    }
});