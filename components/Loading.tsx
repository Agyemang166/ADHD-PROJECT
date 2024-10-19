import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
       <Text style={styles.loading}>Loading...</Text>
       <ActivityIndicator size={80} color="green" />
      </View>
    </SafeAreaView>
  )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    loading:{
       fontSize: 20,
       fontWeight: 'bold',
       marginBottom: 20,
    }
});