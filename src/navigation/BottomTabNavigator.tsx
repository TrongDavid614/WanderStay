import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Search, Heart, LayoutGrid, MessageSquare, User } from '@tamagui/lucide-icons'
import type { BottomTabParamList } from '@/types/navigation'

import ExploreStack from '@/navigation/stacks/ExploreStack'
import FavoritesScreen from '@/features/favorites/screens/FavoritesScreen'
import TripsStack from '@/navigation/stacks/TripsStack'
import MessagesStack from '@/navigation/stacks/MessagesStack'
import ProfileStack from '@/navigation/stacks/ProfileStack'

const Tab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5C4CFE',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F3F4F6',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="ExploreTab"
        component={ExploreStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => <Heart color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="BookingsTab"
        component={TripsStack}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color, size }) => <LayoutGrid color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="InboxTab"
        component={MessagesStack}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => <MessageSquare color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
