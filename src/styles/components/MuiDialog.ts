import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default {
  styleOverrides: {
    root: {
      zIndex: 2000,
    },

    paper: {
      boxShadow: '0px 7px 40px rgba(0, 0, 0, 0.05)',
      borderRadius: 28,

      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1),
      },
    },
  },
};
