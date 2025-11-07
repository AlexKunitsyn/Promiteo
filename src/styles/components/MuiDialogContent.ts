import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default {
  styleOverrides: {
    root: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(4),

      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },

  },
};