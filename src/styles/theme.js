import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#f50057' },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    h1: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "var(--font-playfair)",
      fontWeight: 700,
    },
  },
});

export default theme;