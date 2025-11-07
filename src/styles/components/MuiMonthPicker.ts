import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      '.MuiTypography-root.Mui-selected': {
        background: palette.selectedGreen,
        color: palette.green,
      },
      '.MuiTypography-root:hover': {
        color: palette.green,
        background: palette.hoverGreen,
      },
      '.MuiTypography-root.Mui-selected:hover': {
        color: palette.green,
        background: palette.selectedGreen,
      },
    },
  },
};
