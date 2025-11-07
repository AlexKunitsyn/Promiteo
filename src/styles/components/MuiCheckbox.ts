import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      color: palette.greyColor,
      // border: `1px solid ${palette.greyColor}`,
      borderRadius: 5,
      width: 16,
      height: 16,
      padding: 0,
      '&.Mui-disabled': {
        opacity: '0.9',
        // color: palette.primary.light,
        color: 'initial',
      },
      '&.Mui-checked': {
        // backgroundColor: palette.orange,
        border: 'none',
      },

      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
  },
};
