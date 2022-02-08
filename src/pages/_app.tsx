import React from 'react';
import '../assets/styles/globals.css';
import '../assets/styles/scss/main.module.scss';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Header from 'components/HeaderComponents/Header';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    const handleHeaderClick = () => {
        console.log('I was clicked');
    };

    return (
        <Provider store={store}>
            <Header clicked={handleHeaderClick} />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    );
}

export default MyApp;
