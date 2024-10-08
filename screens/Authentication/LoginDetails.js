import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomPassword from '../../components/CustomPassword';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

const LoginDetails = () => {
  const google = require('../../assets/google.png');
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
      <View style={styles.heading1Container}>
        <Text style={styles.heading1Text}>Welcome back to Your Journey!</Text>
      </View>
      <View style={styles.heading2Container}>
        <Text style={styles.heading2Text}>Let's dive back in!</Text>
        <Icon name='rocket' size={15} color='red' style={styles.icon} />
      </View>
     <View style={styles.inputSection}>
     <Text style={styles.textInputText}>Email address</Text>
     <TextInput placeholder='Email' style={styles.textInput} />
     <Text  style={styles.textInputText}>Your Password</Text>
     <CustomPassword placeholder='Password' />
     </View>
     <View style={styles.forgetPasswordContainer}>
      <Text style={styles.forgetPassword}>Forget password?</Text>
     </View>
     <View style={styles.button}>
      <CustomButton placeholderText='Next' />
     </View>
     <Text style={styles.or}>or</Text>
     <Text style={styles.googleText}>Log in using google account</Text>
     <TouchableOpacity style={styles.googleButton}>
      <Image source={google} style={styles.googleImage} />
      <Text>Google</Text>
    </TouchableOpacity>
    <View style={styles.signUPContainer}>
       <Text style={styles.accountText}>Don't have an account?</Text>
       <Text style={styles.signUp}>Sign up</Text>
    </View>
    </View>
    </GestureHandlerRootView>
  )
}

export default LoginDetails

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:  105,
    paddingLeft: 14.5,
    backgroundColor: '#FFFFFF',
  },
  heading1Container : {
     marginHorizontal: 'auto'
  },
  heading1Text:{
   fontSize: 24,
   color: 'rgba(0, 0, 0, 1)'
  },
  heading2Container: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
    justifyContent: 'space-around',
  },
  heading2Text: {
    fontSize: 16,
    marginRight: 1,
    color: 'rgba(93, 92, 92, 1)'
  }, 
  icon: {
    alignSelf: 'center',
  },
  inputSection:{
    marginLeft: 1,
    width: 361,
    marginBottom: 18,
  },
  textInput:{
    borderWidth: 1,
    height: 55,
    padding: 10,
    fontSize: 18,
    marginBottom: 17,
    borderColor: '#F3F3F3',
    backgroundColor: '#F3F3F3'
  },
  textInputText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)'
  },
  forgetPasswordContainer: {
    marginRight: 18,
    marginBottom: 60,
  },
  forgetPassword: {
    textAlign: 'right',
    fontSize: 16,
    color: '#F67A27'
  },
  button:{
    width: 361,
    marginBottom: 26,
  },
  or: {
    marginHorizontal: 'auto', 
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  googleText:{
    marginHorizontal: 'auto',
    color: '#5D5C5C',
    marginBottom: 12,
  },
  googleImage:{
    width: 30,
    height: 30,
    marginRight: 11,
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 30,
    width: 358,
    height: 50,
  },
  signUPContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 126,
  },
  accountText:{
    fontWeight: 'bold',
  },
  signUp:{
    color: '#F67A27',
    marginLeft: 3,
  }
  
});