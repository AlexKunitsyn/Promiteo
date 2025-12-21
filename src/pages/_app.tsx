import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
import store from '../redux/store';
import theme from '../styles/theme';
import '../styles/global.css';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from './../components/Header'
import { LanguageProvider } from "../i18n/LanguageProvider";

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

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <LanguageProvider>
                <ThemeProvider theme={theme}>
                    {/*<CssBaseline />*/}
                    <main className={`${playfair.variable} ${inter.variable}`}>
                        <Header/>
                        <Component {...pageProps} />
                    </main>
                </ThemeProvider>
            </LanguageProvider>
        </Provider>
    );
}