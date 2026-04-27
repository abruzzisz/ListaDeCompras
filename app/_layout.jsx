import React from 'react'
import { Stack } from 'expo-router'
import { Statusbar } from 'expo-status-bar'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen 
        name="index" options={{ headerShown: false }} />
        <StackScreen 
        name="home" options={{ headerShown: false }} />
    </Stack>
  )
}