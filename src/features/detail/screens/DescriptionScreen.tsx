import React from 'react'
import { YStack, Text } from 'tamagui'

export default function DescriptionScreen() {
  return (
    <YStack flex={1} backgroundColor="#FFFFFF" padding={16} justifyContent="center" alignItems="center">
      <Text fontSize={20} fontWeight="bold">About this sanctuary / Description</Text>
      <Text color="#6B7280" marginTop={8}>Description.png</Text>
    </YStack>
  )
}
