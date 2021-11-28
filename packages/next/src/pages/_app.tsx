import '../styles/global.scss';

import 'raf/polyfill';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DripsyProvider } from 'dripsy';

import { theme } from '../../../common/theme';
import { Navigation } from '../../../common/navigation';
import useAuthentication from 'common/authentication/hooks/useAuthentication';

export default function App({ Component, pageProps }: AppProps) {
  const { isAuthenticated } = useAuthentication();
  return (
    <>
      <Head>
        <title>Example</title>
        <meta key="title" name="title" content="Example" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <DripsyProvider theme={theme}>
        <SafeAreaProvider>
          {isAuthenticated ? (
            <h1>Logged In</h1>
          ) : (
            <Navigation Component={Component} pageProps={pageProps} />
          )}
        </SafeAreaProvider>
      </DripsyProvider>
    </>
  );
}
