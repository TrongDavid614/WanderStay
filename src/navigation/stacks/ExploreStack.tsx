import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { ExploreStackParamList } from '@/types/navigation'

import ExploreScreen from '@/features/explore/screens/ExploreScreen'
import FilterResultScreen from '@/features/explore/screens/FilterResultScreen'

const Stack = createNativeStackNavigator<ExploreStackParamList>()

export default function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExploreHome" component={ExploreScreen} />
      <Stack.Screen name="FilterResult" component={FilterResultScreen} />
    </Stack.Navigator>
  )
}
