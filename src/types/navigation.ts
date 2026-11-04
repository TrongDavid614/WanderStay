import type { NavigatorScreenParams } from '@react-navigation/native'

// 1. Auth Stack Param List
export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}

// 2. Explore Stack Param List
export type ExploreStackParamList = {
  ExploreHome: undefined
  FilterResult: {
    location?: string
    dates?: string
    guests?: number
    priceRange?: [number, number]
  } | undefined
}

// 3. Trips Stack Param List
export type TripsStackParamList = {
  BookingsList: undefined
  SmartKey: { bookingId?: string; propertyTitle?: string }
  Directions: { propertyId?: string; propertyTitle?: string }
}

// 4. Messages Stack Param List
export type MessagesStackParamList = {
  InboxList: undefined
  HostChat: { hostName?: string; bookingRef?: string }
  TravelAssistant: { inquiryType?: string }
}

// 5. Profile Stack Param List
export type ProfileStackParamList = {
  ProfileHome: undefined
  PersonalInformation: undefined
  LoginSecurity: undefined
  PaymentsPayouts: undefined
}

// 6. Bottom Tab Param List
export type BottomTabParamList = {
  ExploreTab: NavigatorScreenParams<ExploreStackParamList>
  FavoritesTab: undefined
  BookingsTab: NavigatorScreenParams<TripsStackParamList>
  InboxTab: NavigatorScreenParams<MessagesStackParamList>
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>
}

// 7. Root Stack Param List (All 28 screens accessible in type-safe manner)
export type RootStackParamList = {
  // Splash & Auth
  Splash: undefined
  Auth: NavigatorScreenParams<AuthStackParamList>

  // Main Tabs
  MainTabs: NavigatorScreenParams<BottomTabParamList>

  // Modals (Search & Filter)
  WhereModal: undefined
  ScheduleModal: undefined
  GuestModal: undefined
  FilterModal: undefined
  PriceRangeModal: undefined

  // Detail Flow
  PropertyDetails: { propertyId: string }
  Facilities: { propertyId: string }
  Description: { propertyId: string }
  Reviews: { propertyId: string }

  // Booking & Payment Flow
  ConfirmAndPay: {
    propertyId: string
    startDate?: string
    endDate?: string
    guests?: number
  }
  PaymentSuccess: {
    refNumber: string
    propertyTitle?: string
  }
  TripReceipt: {
    refNumber?: string
    bookingId?: string
  }

  // Cross-navigation shortcuts to nested stack screens
  SmartKeyScreen: { bookingId?: string; propertyTitle?: string }
  DirectionsScreen: { propertyId?: string; propertyTitle?: string }
  HostChatScreen: { hostName?: string; bookingRef?: string }
  TravelAssistantScreen: { inquiryType?: string }
  PersonalInformationScreen: undefined
  LoginSecurityScreen: undefined
  PaymentsPayoutsScreen: undefined
}
