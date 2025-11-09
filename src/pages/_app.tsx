import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from '../redux/store';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}