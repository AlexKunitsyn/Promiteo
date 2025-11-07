import palette from '@styles/palette';

export default {
  styleOverrides: {
    root: {
      margin: 5,
      borderRadius: 8,
      borderColor: palette.darkGrey,
      color: palette.darkGrey,
      fontWeight: 500,
      fontSize: 12,
      // backgroundColor: palette.darkGrey,
      '& .MuiChip-deleteIcon': {
        fontSize: 18,
      },
    },
    filled: {
      backgroundColor: palette.primary.main,
      color: palette.primary.light,
      ['&:hover']: {
        backgroundColor: palette.button.primary.hover,
      },
    },
  },
};
