import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomButton = ({placeholderText,iconName,color,size,...props}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{placeholderText}</Text>
                {iconName ? <Icon 
                 name={iconName}
                 size={size}
                 color={color}
                 /> : null}
            </TouchableOpacity>
    </View>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
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
        fontWeight: 'bold',
        marginRight: 19.5,
    }
});