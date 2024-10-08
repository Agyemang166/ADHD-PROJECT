import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomPassword = ({placeholder, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput 
          placeholder={placeholder} 
          style={styles.textInput}
          secureTextEntry={true}
       />
       <Icon name='eye-outline' size={30} style={styles.icon}  />
    </View>
  )
}

export default CustomPassword;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        // marginHorizontal: 'auto',
        width: 361,
        height: 55,
        borderColor: '#F3F3F3',
        backgroundColor: '#F3F3F3',
        alignItems: 'center', 
    },
    textInput: {
        height: 40,
        padding: 10,
        fontSize: 18,
    },
    icon: {
       alignSelf: 'center',
       marginRight: 19.2
    }
});