import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen
            name="Welcome"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="knowYourName"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="niceMeetingYou"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="yourAge"
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="index"
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
    </Stack>
  )
}

export default _layout