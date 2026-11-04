import React from 'react'
import { YStack, Text } from 'tamagui'

export default function TravelAssistantScreen() {
  return (
    <YStack flex={1} backgroundColor="#FFFFFF" padding={16} justifyContent="center" alignItems="center">
      <Text fontSize={20} fontWeight="bold">WanderStay Travel Assistant (24/7)</Text>
      <Text color="#6B7280" marginTop={8}>7 Assistant.png</Text>
    </YStack>
  )
}
