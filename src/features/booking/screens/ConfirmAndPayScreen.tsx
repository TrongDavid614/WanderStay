import React from 'react'
import { YStack, Text } from 'tamagui'

export default function ConfirmAndPayScreen() {
  return (
    <YStack flex={1} backgroundColor="#FFFFFF" padding={16} justifyContent="center" alignItems="center">
      <Text fontSize={20} fontWeight="bold">Confirm and Pay</Text>
      <Text color="#6B7280" marginTop={8}>Confirm and pay.png</Text>
    </YStack>
  )
}
