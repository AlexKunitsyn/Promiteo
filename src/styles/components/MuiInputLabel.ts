import palette from '../palette';
import { createTheme } from '@mui/material/styles';
const theme = createTheme();

export default {
  styleOverrides: {
    filled: {
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 400,
      // transform: 'translate(14px, 35px) scale(1)',
      color: palette.text.primary,

      '&.Mui-focused': {
        color: palette.text.primary,

        '&.Mui-error': {
          color: palette.error.main,
        },
      },

      '&+.MuiOutlinedInput-root': {
        // marginTop: 16,
      },
    },
    outlined: {
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 400,
      // transform: 'translate(14px, 35px) scale(1)',
      color: palette.primary.dark,

      '&.Mui-focused': {
        color: palette.text.primary,

        '&.Mui-error': {
          color: palette.error.main,
        },
      },

      '&+.MuiOutlinedInput-root': {
        // marginTop: 16,
      },
    },

    asterisk: {
      marginLeft: -2,
    },

    root: {
      '&.Mui-disabled': {
        color: palette.darkGray,
      },
    },
  },
};
