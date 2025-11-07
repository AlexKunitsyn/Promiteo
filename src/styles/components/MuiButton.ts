import { alpha } from '@mui/material';
import palette from '../palette';

import { createTheme } from '@mui/material/styles';
import typography from '../typography';

const theme = createTheme();

const largeButton = {
  fontSize: 22,
  lineHeight: 'normal',
  fontWeight: 500,
  padding: '16px',
};

const smallButton = {
  fontSize: 16,
  lineHeight: 'normal',
  fontWeight: 400,
  padding: '7.5px 16px',
};

const smallButtonOutlined = {
  fontSize: 16,
  lineHeight: 'normal',
  fontWeight: 400,
  padding: '7.5px 16px',
};

const mediumButtonOutlined = {
  // fontSize: 22,
  lineHeight: 'normal',
  fontWeight: 400,
  padding: '9.5px 20px',
};

const mediumButtonContained = {
  fontSize: 17,
  lineHeight: 'normal',
  fontWeight: 400,
  padding: '9.5px 20px',
};

export default {
  styleOverrides: {
    root: {
      lineHeight: '23px',

      minWidth: 'inherit',
      borderWidth: 1,
      borderColor: palette.primary.main,

      '&:hover': {
        boxShadow: 'none',
        minWidth: 'inherit',
        borderWidth: 1,
        borderColor: palette.primary.main,
      },
      '&.Mui-disabled': {
        borderColor: palette.productNoInStockText,
      },
    },

    colorInherit: {
      backgroundColor: palette.button.inherit.main,
      color: palette.text.primary,
      '&:hover': {
        color: palette.text.secondary,
        backgroundColor: palette.button.inherit.hover,
      },
    },

    contained: {
      padding: '13.5px 26px',
      backgroundColor: palette.primary.main,
      color: palette.text.primary,
      boxShadow: 'none',
      borderRadius: 100,
      fontSize: 18,

      '&:hover': {
        backgroundColor: palette.primary.main,
      },
    },

    containedSuccess: {
      backgroundColor: palette.green,
      color: palette.text.secondary,
    },

    text: {
      color: palette.text.secondary,
      borderRadius: 3,
    },

    textPrimary: {
      padding: 0,
      //
      // [theme.breakpoints.down('sm')]: {
      //   ...typography.subtitle5,
      // },
      //
      '&:hover': {
        color: palette.button.inherit.hover,
        backgroundColor: 'transparent',
      },
    },

    containedSizeLarge: largeButton,
    containedSizeMedium: mediumButtonContained,
    containedSizeSmall: smallButton,

    containedSecondary: {
      backgroundColor: palette.greyButton,
      color: palette.primary.light,
      borderRadius: 100,
      '&:hover': {
        backgroundColor: palette.greyButtonHover,
      },
    },

    containedPrimary: {
      color: palette.text.secondary,
      borderRadius: 100,

      border: '1px solid',
      borderColor: 'transparent',
      // fontWeight: 600,

      '&:hover': {
        backgroundColor: palette.button.primary.hover,
      },

      '&.Mui-disabled': {
        backgroundColor: 'transparent',
        // color: alpha(palette.text.primary, 1),
        color: palette.greyColor,
        border: '1px solid',
        borderColor: palette.greyColor,
        '& svg': {
          width: '24px',
          height: '24px',
          color: palette.greyColor,

          '& path': {
            fill: palette.greyColor,
          },
        },
      },
    },

    // outlinedSecondary: {
    //   color: palette.text.primary,
    //   borderColor: palette.button.secondary.main,
    //   '&:hover': {
    //     backgroundColor: 'transparent',
    //     borderColor: palette.button.secondary.main,
    //   },
    //
    //   '&:active': {
    //     backgroundColor: 'none',
    //   },
    // },
    //
    outlinedPrimary: {
      // color: palette.text.primary,
      // borderColor: palette.text.primary,
      '&.Mui-disabled': {
        // backgroundColor: 'transparent',
        // color: alpha(palette.text.primary, 1),
        color: palette.greyColor,
        border: '1px solid',
        borderColor: palette.greyColor,
        '& svg': {
          width: '24px',
          height: '24px',
          color: palette.greyColor,

          '& path': {
            fill: palette.greyColor,
          },
        },
      },
    },

    outlined: {
      borderRadius: 100,
      padding: '16px 26px',
      fontSize: 17,
    },

    outlinedSizeLarge: largeButton,
    outlinedSizeMedium: mediumButtonOutlined,
    outlinedSizeSmall: smallButtonOutlined,
  },
};
