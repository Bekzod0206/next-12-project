import 'src/styles/global.css'
import 'nprogress/nprogress.css'
import type { AppProps } from "next/app";
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from "src/helpers/create-emotion-cache"
import theme  from 'src/helpers/theme'
import { CssBaseline} from '@mui/material'
import NProgress from 'nprogress';
import Router from 'next/router';
import { useEffect } from 'react';

const clientSideEmotionCache = createEmotionCache()
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const handleRouterStart = () => NProgress.start();
    const handleRouterDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouterStart);
    Router.events.on('routeChangeComplete', handleRouterDone);
    Router.events.on('routeChangeError', handleRouterDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouterStart);
      Router.events.off('routeChangeComplete', handleRouterDone);
      Router.events.off('routeChangeError', handleRouterDone);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp