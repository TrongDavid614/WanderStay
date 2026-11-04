import React from 'react'
import { YStack, Text } from 'tamagui'

export default function PriceRangeModal() {
  return (
    <YStack flex={1} backgroundColor="#FFFFFF" padding={16} justifyContent="center" alignItems="center">
      <Text fontSize={20} fontWeight="bold">Price range & Type of place</Text>
      <Text color="#6B7280" marginTop={8}>Price range.png</Text>
    </YStack>
  )
}
