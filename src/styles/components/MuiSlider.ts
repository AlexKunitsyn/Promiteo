import palette from '../palette';

export default {
  styleOverrides: {
    colorSecondary: {
      color: palette.darkGrey,
    },

    thumbColorSecondary: {
      backgroundColor: palette.greyBorderColor,
      '&:hover': {
        boxShadow: 'none',
      },

      '&.Mui-focusVisible': {
        boxShadow: 'none',
      },
    },
  },
};
