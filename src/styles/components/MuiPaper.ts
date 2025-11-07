import palette from '../palette';

export default {
  styleOverrides: {
    rounded: {
      borderRadius: 3,
    },
    outlined: {
      border: '1px solid ' + palette.secondary.main,
    },

    elevation1: {
      boxShadow: '0px 7px 40px rgba(0, 0, 0, 0.05)',
    },
    elevation2: {
      boxShadow: '0px 7px 40px rgba(0, 0, 0, 0.05)',
    },
  },
};
