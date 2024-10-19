import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TextField } from '@/components/TextField';
import At from "@/assets/icons/at";
import { Image } from 'expo-image';
import { ElevatedButton } from '@/components/ElevatedButton';

const forgetPassword = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
          style={styles.mascot}
          source="https://miro.medium.com/v2/resize:fit:1400/1*4i-icnegCm9D-DvHC_3BkQ.png"
          contentFit="cover"
          transition={1000}
        />
      <View style={styles.email}>
      <TextField
          prefix={<At height={20} width={20} fill={"#58cc02"} />}
          label="Email address"
          keyboardType="email-address"
        />
        <View style={styles.elevatedButton}>
          <ElevatedButton title='Send Code' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default forgetPassword;

const styles = StyleSheet.create({
  safeArea: {
    marginHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  mascot: {
    marginTop: 30,
    marginBottom: 20,
    width: "100%",
    height: 300,
    objectFit: "contain",
  },
  email: {
    marginTop: 30,
  },
  elevatedButton:{
      marginTop: 40,
    },
  }
)