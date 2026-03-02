import { createTheme } from '@mui/material/styles';
import palette from '../styles/palette';


const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "Inter", sans-serif',
    color:palette.mainTextColor,

    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,

      '@media (min-width:600px)': {
        fontSize: '40px',
      },
      '@media (min-width:900px)': {
        fontSize: '48px',
      },
    },

    h2: {
      fontSize: '36px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '28px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
    },

    body1: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: 1.8,
    },

    button: {
      fontWeight: 600,
    },
  },
});


export default theme;