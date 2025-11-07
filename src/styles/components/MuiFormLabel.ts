import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      marginLeft: 0,
      '&$focused': {
        color: palette.text.primary,
      },
      '&$error': {
        color: palette.secondary.dark,

        '&.Mui-error': {
          color: palette.primary.main,
        },

        '&.Mui-colorSecondary ': {
          color: palette.text.secondary,
        },

        '&.Mui-focused': {
          color: palette.text.primary,
        },
      },


    },

  }
};
