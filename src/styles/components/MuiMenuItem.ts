import { alpha } from '@mui/material/styles';
import palette from '../palette';
import typography from '../typography';

export default {
  styleOverrides: {
    gutters: {
      paddingRight: 12,
      paddingLeft: 12,
      paddingTop: 16,
      paddingBottom: 16,
    },

    root: {
      color: palette.greyColor,
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 400,

      '&:hover': {
        backgroundColor: 'transparent',
        color: palette.primary.light,
      },

      '&.Mui-selected.MuiButtonBase-root': {
        backgroundColor: palette.darkColor,
        color: palette.primary.dark,

        '&:hover': {
          backgroundColor: palette.darkColor,
          color: palette.primary.dark,
        },
      },
    },
  },
};
