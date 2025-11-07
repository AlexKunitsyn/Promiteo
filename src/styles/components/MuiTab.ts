import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      // background: palette.primary.light,
      // textTransform: 'none',
      fontSize: 17,
      lineHeight: 'normal',
      fontWeight: 600,
      // borderColor: palette.secondaryOrange,
      '&.Mui-selected': {
        // color: palette.secondaryOrange,
      },
    },

    textColorInherit: {
      opacity: 1,
      color: 'black',
    },

    textColorPrimary: {
      padding: '6px 0px 6px 0px',
      margin: '0 15px',
      color: palette.primary.dark,
      background: 'transparent',

      '&:first-of-type': {
        // paddingLeft:30,
        marginLeft: 32,
      },
      '&:last-child': {
        // paddingRight:30,
        marginRight: 32,
      },
    },
  },
};
