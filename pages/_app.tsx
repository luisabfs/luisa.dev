import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../theme/themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Luísa Barros - Frontend &amp; Mobile Engineer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta key="image" property="og:image" content="https://raw.githubusercontent.com/luisabfs/luisa.dev/master/public/assets/images/print.png" />
          <meta key="title" property="og:title" content="Luísa Barros - Frontend &amp; Mobile Engineer" />
          <meta key="description" property="og:description" content="Frontend &amp; Mobile Engineer with 6+ years of experience in React Native, React, TypeScript, Next.js and Expo." />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
