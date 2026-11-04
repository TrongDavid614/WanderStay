import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { TripsStackParamList } from '@/types/navigation'

import BookingsScreen from '@/features/trips/screens/BookingsScreen'
import SmartKeyScreen from '@/features/trips/screens/SmartKeyScreen'
import DirectionsScreen from '@/features/trips/screens/DirectionsScreen'

const Stack = createNativeStackNavigator<TripsStackParamList>()

export default function TripsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookingsList" component={BookingsScreen} />
      <Stack.Screen name="SmartKey" component={SmartKeyScreen} />
      <Stack.Screen name="Directions" component={DirectionsScreen} />
    </Stack.Navigator>
  )
}
