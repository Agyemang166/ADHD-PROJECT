import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomPassword from '../../components/CustomPassword';
import CustomButton from '../../components/CustomButton';

const ForgetPassword3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
      <Text style={styles.headingText}>Reset password</Text>
      </View>
      <View style={styles.heading2}>
      <Text style={styles.heading2Text}>Please type something you'll remember</Text>
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.setPassword}>Set a new password</Text>
        <CustomPassword placeholder='Enter new password' />
      </View>
      <View style={styles.passwordContainer2}>
        <Text style={styles.setPassword}>Confirm password</Text>
        <CustomPassword placeholder='Password' />
      </View>
      <View>
        <CustomButton placeholderText='Set new password' />
      </View>
    </View>
  )
}

export default ForgetPassword3;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 126,
        width: 361,
        paddingLeft: 15,
    },
    heading:{
        marginBottom: 8,
    },
    headingText:{
        fontSize: 20,
        color: 'rgba(0,0,0,1)'
    },
    heading2:{
        marginBottom: 58,
    },
    heading2Text:{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    setPassword:{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: 10,
    },
    passwordContainer:{
        marginBottom: 26,
    },
    passwordContainer2:{
        marginBottom: 110,
    }
});