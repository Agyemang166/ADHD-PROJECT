import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

const latest = () => {
    const [isLoading, setIsLoading] = useState(false)
  return (
    <View>
      <Text>latest</Text>
      <Modal visible={isLoading} animationType='slide'   >
        <View style={styles.modal}>
        <Text>Loading...</Text>
        <Button title='Close modal' onPress={() => setIsLoading(false)} />
        </View>
      </Modal>
      <Button title='Go to Home' onPress={()=> router.navigate('/(tabs)/')} />
      <Button title='Show modal' onPress={() => setIsLoading(true)} />
    </View>
  )
}

export default latest

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})