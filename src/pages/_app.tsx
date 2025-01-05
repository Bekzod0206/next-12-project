import 'src/styles/global.css'
import type { AppProps } from "next/app";
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from "src/helpers/create-emotion-cache"
import theme  from 'src/helpers/theme'
import { CssBaseline} from '@mui/material'

const clientSideEmotionCache = createEmotionCache()
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

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