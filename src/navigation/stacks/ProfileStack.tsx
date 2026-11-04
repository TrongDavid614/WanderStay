import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { ProfileStackParamList } from '@/types/navigation'

import ProfileScreen from '@/features/profile/screens/ProfileScreen'
import PersonalInformationScreen from '@/features/profile/screens/PersonalInformationScreen'
import LoginSecurityScreen from '@/features/profile/screens/LoginSecurityScreen'
import PaymentsPayoutsScreen from '@/features/profile/screens/PaymentsPayoutsScreen'

const Stack = createNativeStackNavigator<ProfileStackParamList>()

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileHome" component={ProfileScreen} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
      <Stack.Screen name="LoginSecurity" component={LoginSecurityScreen} />
      <Stack.Screen name="PaymentsPayouts" component={PaymentsPayoutsScreen} />
    </Stack.Navigator>
  )
}
