import palette from '../palette';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default {
  styleOverrides: {
    root: {
      fontSize: 14,
      // lineHeight: '24px',

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.text.primary,
        borderWidth: 1,
      },

      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.error.main,
        borderWidth: 1,
      },

      '&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.error.main,
        borderWidth: 1,
      },
    },

    notchedOutline: {
      transition: '.3s',

      borderColor: palette.primary.dark,
    },

    input: {
      // padding: '12.5px 15px',
      // [theme.breakpoints.down('sm')]: {
      //   padding: theme.spacing(2, 2),
      // },
    },

    inputMultiline: {
      padding: 0,
    },

    inputSizeSmall: {
      padding: '12.5px 12px',
    },
  },
};
