import React, { useRef, useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);  // Array to store OTP digits
  const inputRefs = useRef([]);  // To store references to each TextInput

  const handleChange = (text, index) => {
    if (/^\d$/.test(text) || text === '') {  // Only allow digits or empty string
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to the next input if there's a digit and it's not the last input
      if (text && index < 3) {
        inputRefs.current[index + 1].focus();
      }

      // Optionally, go to the previous input if the field is cleared
      if (!text && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}  // Store the ref for each TextInput
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}  // Limit each TextInput to 1 character
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',  
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray',
    width: 77,
    height: 77,
    textAlign: 'center',
    fontSize: 32,
  },
});

export default OTPInput;
