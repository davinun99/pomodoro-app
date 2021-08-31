import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/style.css'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [headerPrefix, setHeaderPrefix] = useState('');
  return <>
    <Head>    
        <title>{headerPrefix + ` `}Pomodoro App!</title>
        <meta name="description" content="Pomodoro app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} setHeaderPrefix={setHeaderPrefix} />
  </>
}

export default MyApp
