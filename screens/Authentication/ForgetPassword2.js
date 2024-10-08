import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OTPInput from '../../components/OTPInput';
import CustomButton from '../../components/CustomButton';

const ForgetPassword2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading} >
        <Text style={styles.headingText}>Please check your email</Text>
      </View>
      <View style={styles.heading2Container} >
        <Text style={styles.heading2Text}>We've sent a code to</Text>
        <Text style={styles.emailText}>email</Text>
      </View>
      <View style={{marginBottom: 80}}>
      <OTPInput />
      </View>
      <View style={styles.button}>
        <CustomButton placeholderText='Send code' />
      </View>
    </View>
  )
}

export default ForgetPassword2;

const styles = StyleSheet.create({
    container: {
        paddingTop: 105,
        paddingLeft: 15,
    },
    heading:{
        marginBottom: 19,
    },
    headingText:{
        fontSize: 20,
        color: 'rgba(0,0,0,1)'
    },
    heading2Container:{
       flexDirection: 'row',
       marginBottom: 85,
    },
    heading2Text:{
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.7)',
      marginRight: 2,
    },
    emailText: {
      fontSize: 16,
      color: 'rgba(0, 0, 0, 1)',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 358,
        marginBottom: 41,
    },
    button:{
      marginBottom: 48
    }
});