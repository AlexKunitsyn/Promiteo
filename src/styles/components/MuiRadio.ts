import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      color: palette.primary.light,
      border: `1px solid ${palette.greyColor}`,
      borderRadius: 2,
      width: 16,
      height: 16,
      padding: 0,

      '&.Mui-checked': {
        // backgroundColor: palette.orange,
        border: 'none',
      },
    },
  },
};
