import { createTheme } from '@mui/material/styles';
import palette from '../styles/palette';


const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "Inter", sans-serif',
    color:palette.mainTextColor,

    h1: {
      fontWeight: 700,
      fontSize: 54,
      lineHeight: '49px',
      letterSpacing: '-0.3px',
      '@media (min-width:600px)': {
        fontSize: '40px',
      },
      '@media (min-width:900px)': {
        fontSize: '48px',
      },
    },
    title: {
      fontWeight: 600,
      fontSize: 36,
      lineHeight: '36px',
    },
    h2: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '36px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 24,
        lineHeight: '28px',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 22,
        lineHeight: '26px',
      },
    },
    h4: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 22,
        lineHeight: '26px',
      },
    },
    h5: {
      fontWeight: 400,
      fontSize: 22,
      lineHeight: '26px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 20,
      },
    },
    h5Bold: {
      fontWeight: 600,
      fontSize: 22,
      lineHeight: '26px',
      '@media (min-width: 1440px)': {
        fontSize: 20,
      },
    },
    h6: {
      textTransform:'uppercase',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 15,
        lineHeight: '22px',
      },
    },
    body1: {
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 14,
        lineHeight: '22px',
      },
    },

    body1Bold: {
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 600,
      '@media (min-width: 1440px)': {
        fontSize: 14,
        lineHeight: '22px',
      },
    },

    body2: {
      fontSize: 20,
      lineHeight: '27px',
      fontWeight: 600,
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 18,
        lineHeight: '22px',
      },
    },
    body3: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 14,
        lineHeight: '20px',
      },
    },
    body4: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 16,
        lineHeight: '20px',
      },
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '18px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 12,
        lineHeight: '16px',
      },
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 28,
      lineHeight: '36px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 24,
        lineHeight: '28px',
      },
    },
    subtitle3: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '18px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 14,
        lineHeight: '16px',
      },
    },
    subtitle4: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '18px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 12,
        lineHeight: '16px',
      },
    },
    subtitle5: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: '-0.3px',
      '@media (min-width: 1440px)': {
        fontSize: 12,
        lineHeight: '16px',
      },
    },

    button: {
      textTransform: 'none',
      fontSize: 16,
      lineHeight: 'normal',
      fontWeight: 500,
      letterSpacing: '-0.3px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '18px',
      letterSpacing: '-0.3px',
    },
    caption2: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '18px',
      letterSpacing: '-0.3px',
    },
    caption3: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '18px',
      letterSpacing: '-0.3px',
    },

    overline: {
      fontSize: 11,
      fontWeight: 500,
      lineHeight: '13px',
      letterSpacing: '-0.3px',
    },
    overline1: {
      fontSize: 11,
      fontWeight: 400,
      lineHeight: '13px',
      letterSpacing: '-0.3px',
    },
  },
});


export default theme;