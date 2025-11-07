import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from '../redux/store';
import theme from '../styles/theme';

import React, { FC, useEffect } from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { mainTheme } from '../styles/GlobalStyle';
import { persistor, store, wrapper } from '../redux/store';
import * as process from 'process';
import { useRouter } from 'next/router';
import { axiosInstance } from '../services/http/Http';
import { appWithTranslation } from 'next-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { AppProps } from 'next/app';


import 'dayjs/locale/uk';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';


const App: FC<AppProps> = ({ Component, pageProps, ...rest }) => {
    const router = useRouter();
    const language = router.locale;

    useEffect(() => {
        const { common } = axiosInstance.defaults.headers || {};
        // @ts-ignore
        common['Accept-Language'] = language || process.env.NEXT_PUBLIC_DEFAULT_LANG;
    }, [router, language]);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={mainTheme}>
                        <CssBaseline />
                            <Component {...pageProps} />
                    </ThemeProvider>
                </StyledEngineProvider>
            </PersistGate>
        </Provider>
    );
};

export default appWithTranslation(wrapper.withRedux(App));