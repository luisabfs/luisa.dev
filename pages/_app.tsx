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
          <title>Luísa Barros - Mobile Dev</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta key="image" property="og:image" content="https://raw.githubusercontent.com/luisabfs/luisabfs.github.io/source/public/assets/images/print.png" />
          <meta key="title" property="og:title" content="Luísa Barros - Mobile Dev" />
          <meta key="description" property="og:description" content="React Native, React.js, Typescript" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}