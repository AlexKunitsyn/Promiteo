import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default {
  styleOverrides: {
    root: {
      padding: '20px ' + theme.spacing(4),

      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 2, 2),
      },

      width: '100%',

      '& .MuiTypography-root': {
        // paddingTop: 10,
        marginBottom: 0,
        [theme.breakpoints.down('sm')]: {
          paddingTop: 0,
        },
      },
      '& .close_button': {
        padding: 0,
      },
      '& .close_button svg': {
        fontSize: 20,
      },
    },
  },
};
