import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import { store } from '@redux/store';
import theme from '../styles/theme';
import '../styles/global.css';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import { LanguageProvider } from "../i18n/LanguageProvider";
import Preloader from "@components/Preloader";
import React, {useEffect, useState} from "react";
import Head from "next/head";

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    variable: '--font-playfair'
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-inter'
});



 const MyApp =({ Component, pageProps }: AppProps) => {

    return (
        <Provider store={store}>
            <LanguageProvider>
                <ThemeProvider theme={theme}>
                    {/*<CssBaseline />*/}
                    <Head>
                        <link rel="icon" href="/favicon.svg" />
                    </Head>
                    <main className={`${playfair.variable} ${inter.variable}`}>
                        <Preloader />

                        {/*<Intro/>*/}
                        <Header/>
                        <Component {...pageProps} />
                        <Footer/>



                    </main>
                </ThemeProvider>
            </LanguageProvider>
        </Provider>
    );
}

export default MyApp