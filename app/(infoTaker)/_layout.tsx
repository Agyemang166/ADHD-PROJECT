import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen
            name="index"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="achievementPreview"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="dailyGoals"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="reminderSetup"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="startingPoint"
            options={{
                headerShown: false,
            }}
        />
    </Stack>
  )
}

export default _layout