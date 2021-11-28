import React from 'react'
import dynamic from 'next/dynamic'

import { TabBarIcon } from './tab-bar-icon'
import { NextNavigationProps } from './types'
import { createNextTabNavigator } from './universal-tab-navigator'

const HomeNavigator = dynamic(() => import('./routes/home'))

const BottomTab = createNextTabNavigator()

export function NextTabNavigator({
  pageProps,
  Component
}: NextNavigationProps) {
  return (
    <BottomTab.Navigator
      initialRouteName="homeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#7e7f81',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'black',
          zIndex: 1
        },
        lazy: true
      }}
      Component={Component}
      pageProps={pageProps}
    >
      <BottomTab.Screen
        name="homeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}