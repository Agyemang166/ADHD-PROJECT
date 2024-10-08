import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';

const ForgetPassword4 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Password changed</Text>
        <Text style={styles.subheading}>Your password has been changed</Text>
        <Text style={styles.subheading}>successfully</Text>
        <View style={styles.button}>
            <CustomButton placeholderText='Go to homepage' />
        </View>
      </View>
    </View>
  )
}

export default ForgetPassword4;

const styles = StyleSheet.create({
    container: {
        paddingTop: 233
    },
    heading:{
      textAlign: 'center',
      color: 'rgba(0, 0, 0, 1)',
      marginBottom: 16,
      fontSize: 20
    },
    subheading:{
     textAlign: 'center',
     color: 'rgba(0, 0, 0, 0.7)',
     fontSize: 16,
    },
    button:{
        marginTop: 83
    }
});