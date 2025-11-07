import palette from '@styles/palette';

export default {
  styleOverrides: {
    root: {
      backgroundColor: 'white',
      border: `1px solid ${palette.greyBorderColor}`,
      borderRadius: '28px',
      '&::before': {
        display: 'none',
      },
    },
  },
};
