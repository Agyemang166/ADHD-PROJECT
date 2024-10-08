import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

const OnBoardingOne = () => {
    const backimage = require('../../assets/bgrmove.png');
  return (
    <GestureHandlerRootView>
        <View style={styles.container}>
      <View style={styles.heading1Container}>
        <Text style={styles.heading1}>ADHD</Text>
      </View>
      <View styles={styles.backgroundImageheading2Container}>
        <Text style={styles.heading2a}>Let's make</Text>
        <Text style={styles.heading2b}>learning fun</Text>
        <Text style={styles.heading2c}>and exciting!</Text>
      </View>
      <View style={styles.imageContainer}>
      <ImageBackground 
            source={backimage}
            style={styles.backgroundImage}
            resizeMode='cover'
        >
            <CustomButton placeholderText="Let's get you started" iconName='arrow-forward-sharp' 
              size={25} color='black'
              />
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
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 36
    },
    heading2c:{
        color: 'rgba(255, 255, 255, 0.6)',
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
        flexDirection: 'row',
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
        fontSize: 16,
        marginRight: 19.5,
    }
});