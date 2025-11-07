import palette from '../palette';

export default {
  styleOverrides: {
    separator: {
      fontSize: 12,
      color: palette.breadcrumbsColor,
      marginLeft: 4,
      marginRight: 4,
    },

    li: {
      color: palette.text.primary,
      '& a': {
        textDecoration: 'none',
      },
    },
  },
};
