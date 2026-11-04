import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { MessagesStackParamList } from '@/types/navigation'

import InboxScreen from '@/features/messages/screens/InboxScreen'
import HostChatScreen from '@/features/messages/screens/HostChatScreen'
import TravelAssistantScreen from '@/features/messages/screens/TravelAssistantScreen'

const Stack = createNativeStackNavigator<MessagesStackParamList>()

export default function MessagesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InboxList" component={InboxScreen} />
      <Stack.Screen name="HostChat" component={HostChatScreen} />
      <Stack.Screen name="TravelAssistant" component={TravelAssistantScreen} />
    </Stack.Navigator>
  )
}
