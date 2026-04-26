import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Poppins } from 'next/font/google';

// Ваши кастомные импорты по структуре проекта
import { store } from '../redux/store';
import theme from '../styles/theme';
import { LanguageProvider } from "../i18n/LanguageProvider";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from "../components/Preloader";

// Глобальные стили импортируем ПОСЛЕ MUI компонентов (в связке с injectFirst это даст им приоритет)
import '../styles/global.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <LanguageProvider>
                {/* StyledEngineProvider с injectFirst — решение вашей проблемы со "слетающими" стилями */}
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <Head>
                            <title>Promiteo</title>
                            <meta name="viewport" content="initial-scale=1, width=device-width" />
                            <link rel="icon" href="/favicon.svg" />
                        </Head>

                        {/* Теперь CssBaseline можно включить: он нормализует базу,
                            но ваши стили из global.css будут иметь приоритет */}
                        <CssBaseline />

                        <main className={poppins.className}>
                            <Preloader />
                            <Header />
                            <Component {...pageProps} />
                            <Footer />
                        </main>
                    </ThemeProvider>
                </StyledEngineProvider>
            </LanguageProvider>
        </Provider>
    );
}

export default MyApp;