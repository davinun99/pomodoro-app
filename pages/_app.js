import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/style.css'
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { createWrapper } from 'next-redux-wrapper';

function MyApp({ Component, pageProps }) {
  const [headerPrefix, setHeaderPrefix] = useState('');
  return <Provider store={store}>
    <Head>    
        <title>{headerPrefix + ` `}Pomodoro App!</title>
        <meta name="description" content="Pomodoro app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} setHeaderPrefix={setHeaderPrefix} />
  </Provider>
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
