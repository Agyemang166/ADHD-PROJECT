import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';

const ForgetPassword1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading1}>
      <Text style={styles.heading1Text}>Forget password?</Text>
      </View>
      <View style={styles.heading2}>
      <Text style={styles.heading2Text}>Don't worry it happens. Please enter the email</Text>
      <Text style={styles.heading3Text}>associated with your account.</Text>
      </View>
      <View>
        <Text style={styles.textInputText}>Email address</Text>
        <TextInput placeholder='Email' style={styles.textInput} />
      </View>
      <View>
        <CustomButton placeholderText='Send code' />
      </View>
    </View>
  )
}

export default ForgetPassword1;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 126,
        width: 361,
        paddingLeft: 15,
    },
    heading1:{
        marginBottom: 8,
    },
    heading1Text:{
        fontSize: 24,
        color:'rgba(0, 0, 0, 1)'
    },
    heading2:{
        marginBottom: 20,
    },
    heading2Text:{
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.7)'
    },
    heading3Text:{
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.7)',
      textAlign: 'center'
    },
    textInputText: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: 10
    },
    textInput: {
        backgroundColor: 'rgba(243, 243, 243, 1)',
        width: 361,
        height: 55,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 95,
    }

});