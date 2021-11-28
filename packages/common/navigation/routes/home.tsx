import React from 'react'


import { HelloWorld } from '../../hello-world'
import AuthButton from '../../authentication/components/authentication-button'

function Page() {
  return (<><HelloWorld />   <AuthButton /></>)
}

import createStackNavigator from '../create-stack-navigator'
import { HomeStackParams } from '../types'
import { navigatorScreenOptions } from '../navigator-screen-options'

export function HomeScreen() {
  return <></>
}

const HomeStack = createStackNavigator<HomeStackParams>()

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={navigatorScreenOptions}>
      <HomeStack.Screen
        name="home"
        component={Page}
        options={{ title: 'Home', headerTitle: 'Hello World' }}
      />
    </HomeStack.Navigator>
  )
}