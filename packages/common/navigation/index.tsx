import React, { useRef, useMemo, useEffect } from 'react'
import {
  NavigationContainer,
  useLinkTo,
  LinkingOptions
} from '@react-navigation/native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { linking } from './linking'
import type { NextNavigationProps } from './types'
import Router from 'next/router'
import { Platform } from 'react-native'
import { NextTabNavigator } from './next-tab-navigator'

function LinkTo() {
  const linkTo = useLinkTo()

  useEffect(function trigger() {
    if (Platform.OS === 'web' && Router) {
      const handler = (path: string) => {
        linkTo(path)
      }
      Router.events.on('routeChangeComplete', handler)

      return () => {
        Router.events.off('routeChangeComplete', handler)
      }
    }
  }, [])

  return null
}

function useLinkingConfig(
  trackedLinking: React.MutableRefObject<LinkingOptions<{}>>
) {
  return {
    linking: trackedLinking.current,
    onReady: useMemo(
      () =>
        Platform.select({
          web: () => {
            trackedLinking.current.enabled = false
          }
        }),
      []
    )
  }
}

export function Navigation({ Component, pageProps }: NextNavigationProps) {
  const trackedLinking = useRef(linking)
  const linkingConfig = useLinkingConfig(trackedLinking)

  return (
    <NavigationContainer
      linking={linkingConfig.linking}
      onReady={linkingConfig.onReady}
      theme={{
        dark: true,
        colors: {
          primary: 'rgb(255, 255, 255)',
          background: 'rgb(0, 0, 0)',
          card: 'rgb(0, 0, 0)',
          text: 'rgb(255, 255, 255)',
          border: 'rgb(39, 39, 41)',
          notification: 'rgb(255, 69, 58)'
        }
      }}
      documentTitle={{
        enabled: true,
        formatter: (options) =>
          options?.title ? `${options.title} - Record Pool` : 'Record Pool'
      }}
    >
      <LinkTo />
      <BottomSheetModalProvider>
        <NextTabNavigator Component={Component} pageProps={pageProps} />
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}