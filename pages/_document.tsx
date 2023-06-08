import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      } 
    } finally {
      sheet.seal();
    }
  }
  
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
      {/* <Head>
        <title>Luísa Barros - Mobile Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta key="image" property="og:image" content="https://raw.githubusercontent.com/luisabfs/luisabfs.github.io/source/src/assets/images/print.png" />
        <meta key="title" property="og:title" content="Luísa Barros - Desenvolvedora Mobile" />
        <meta key="description" property="og:description" content="React Native, React, Typescript" />

        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
  }
}