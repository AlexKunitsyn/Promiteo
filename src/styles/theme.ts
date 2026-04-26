import { createTheme, ThemeOptions } from '@mui/material/styles';
import palette from './palette';

const themeOptions: ThemeOptions = {
  palette: {
    ...palette,
    text: {
      primary: palette.mainTextColor || '#000000',
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",

    h1: {
      fontWeight: 700,
      fontSize: '54px',
      lineHeight: '49px',
      letterSpacing: '-0.3px',
      '@media (max-width:900px)': { fontSize: '48px' },
      '@media (max-width:600px)': { fontSize: '40px' },
    },
    // ОБНОВЛЕННЫЙ H2: Универсальный заголовок для блоков сайта
    h2: {
      fontWeight: 600,
      fontSize: '38px', // Базовый размер для мобильных устройств
      lineHeight: 1.2,
      textAlign: 'center', // Центрирование как в вашем styled компоненте
      width: '100%',
      color: palette.mainTextColor, // Использование основного цвета текста из палитры
      '@media (min-width: 900px)': { // Адаптив для md и выше (аналог breakpoints.up('md'))
        fontSize: '3.5rem',
      },
      '@media (min-width: 1440px)': {
        lineHeight: '1.1',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '34px',
      lineHeight: '28px',
      letterSpacing: '-0.3px',
    },
    h4: {
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '28px',
    },
    h5: {
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '26px',
    },
    h5Bold: {
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: '26px',
    },
    h6: {
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    title: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '36px',
    },
    body1: {
      fontSize: '17px',
      lineHeight: '30px',
      fontWeight: 400,
    },
    body1Bold: {
      fontSize: '17px',
      lineHeight: '24px',
      fontWeight: 600,
    },
    body3: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    subtitle5: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '16px',
    },
    button: {
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2', // Гарантируем использование тега <h2> для SEO
          h5Bold: 'h5',
          body1Bold: 'p',
          title: 'h1',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;