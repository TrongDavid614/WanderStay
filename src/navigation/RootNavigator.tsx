import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/types/navigation'

import SplashScreen from '@/features/auth/screens/SplashScreen'
import AuthStack from '@/navigation/stacks/AuthStack'
import BottomTabNavigator from '@/navigation/BottomTabNavigator'

// Modals (Search & Filters)
import WhereModal from '@/features/explore/screens/WhereModal'
import ScheduleModal from '@/features/explore/screens/ScheduleModal'
import GuestModal from '@/features/explore/screens/GuestModal'
import FilterModal from '@/features/explore/screens/FilterModal'
import PriceRangeModal from '@/features/explore/screens/PriceRangeModal'

// Detail screens
import PropertyDetailsScreen from '@/features/detail/screens/PropertyDetailsScreen'
import FacilitiesScreen from '@/features/detail/screens/FacilitiesScreen'
import DescriptionScreen from '@/features/detail/screens/DescriptionScreen'
import ReviewsScreen from '@/features/detail/screens/ReviewsScreen'

// Booking & Receipt screens
import ConfirmAndPayScreen from '@/features/booking/screens/ConfirmAndPayScreen'
import PaymentSuccessScreen from '@/features/booking/screens/PaymentSuccessScreen'
import TripReceiptScreen from '@/features/booking/screens/TripReceiptScreen'

// Cross-tab direct screen shortcuts
import SmartKeyScreen from '@/features/trips/screens/SmartKeyScreen'
import DirectionsScreen from '@/features/trips/screens/DirectionsScreen'
import HostChatScreen from '@/features/messages/screens/HostChatScreen'
import TravelAssistantScreen from '@/features/messages/screens/TravelAssistantScreen'
import PersonalInformationScreen from '@/features/profile/screens/PersonalInformationScreen'
import LoginSecurityScreen from '@/features/profile/screens/LoginSecurityScreen'
import PaymentsPayoutsScreen from '@/features/profile/screens/PaymentsPayoutsScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* 1. Splash & Auth */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthStack} />

      {/* 2. Main Tab Flow (with nested Sub-Stacks) */}
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      {/* 3. Search & Filter Modals */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="WhereModal" component={WhereModal} />
        <Stack.Screen name="ScheduleModal" component={ScheduleModal} />
        <Stack.Screen name="GuestModal" component={GuestModal} />
        <Stack.Screen name="FilterModal" component={FilterModal} />
        <Stack.Screen name="PriceRangeModal" component={PriceRangeModal} />
      </Stack.Group>

      {/* 4. Detail Flow */}
      <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
      <Stack.Screen name="Facilities" component={FacilitiesScreen} />
      <Stack.Screen name="Description" component={DescriptionScreen} />
      <Stack.Screen name="Reviews" component={ReviewsScreen} />

      {/* 5. Booking & Receipt Flow */}
      <Stack.Screen name="ConfirmAndPay" component={ConfirmAndPayScreen} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      <Stack.Screen name="TripReceipt" component={TripReceiptScreen} />

      {/* 6. Direct Cross-Navigation Shortcuts */}
      <Stack.Screen name="SmartKeyScreen" component={SmartKeyScreen} />
      <Stack.Screen name="DirectionsScreen" component={DirectionsScreen} />
      <Stack.Screen name="HostChatScreen" component={HostChatScreen} />
      <Stack.Screen name="TravelAssistantScreen" component={TravelAssistantScreen} />
      <Stack.Screen name="PersonalInformationScreen" component={PersonalInformationScreen} />
      <Stack.Screen name="LoginSecurityScreen" component={LoginSecurityScreen} />
      <Stack.Screen name="PaymentsPayoutsScreen" component={PaymentsPayoutsScreen} />
    </Stack.Navigator>
  )
}
