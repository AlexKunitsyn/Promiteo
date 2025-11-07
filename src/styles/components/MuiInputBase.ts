import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      fontSize: 14,
      lineHeight: '19px',
      fontWeight: 400,
      borderRadius: 4,
      // borderRadius: 28,
      marginBottom: 0,

      '@media (max-width: 900px)': {
        ' &.Mui-focused': {
          fontSize: 16,
        },
      },

      // 'label +&': {
      //   marginTop: 8,
      // },
      '&.Mui-disabled': {
        color: palette.darkGray,
      },
    },

    input: {
      height: 'auto',
      '&.Mui-disabled': {
        textFillColor: 'inherit',
      },
    },
  },
};
