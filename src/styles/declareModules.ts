import { createTheme } from '@mui/material/styles';
import React from 'react';
import { splitDivider } from './palette';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    subtitle3: React.CSSProperties;
    subtitle4: React.CSSProperties;
    subtitle5: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    h5Bold: React.CSSProperties;
    body1Bold: React.CSSProperties;
    overline1: React.CSSProperties;
    title: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    subtitle3: React.CSSProperties;
    subtitle4: React.CSSProperties;
    subtitle5: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    h5Bold: React.CSSProperties;
    body1Bold: React.CSSProperties;
    overline1: React.CSSProperties;
    title: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    caption2: true;
    caption3: true;
    h5Bold: true;
    body1Bold: true;
    overline1: true;
    title: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    button: {
      primary: Palette['primary'];
      secondary: Palette['primary'];
    };
    gray: React.CSSProperties['color'];
    mainColor: React.CSSProperties['color'];
    secondaryDark: React.CSSProperties['color'];
    blackMain: React.CSSProperties['color'];
    yellow: React.CSSProperties['color'];
    green: React.CSSProperties['color'];
    splitDivider: React.CSSProperties['color'];
    lightGreen: React.CSSProperties['color'];
    darkGray: React.CSSProperties['color'];
    currencyRow: React.CSSProperties['color'];
    contrastGray: React.CSSProperties['color'];
    activeCategoryNotification: React.CSSProperties['color'];
    contractorRow: React.CSSProperties['color'];
    contractRow: React.CSSProperties['color'];
    secondaryGray: React.CSSProperties['color'];
    errorText: React.CSSProperties['color'];
    consumptionColor: React.CSSProperties['color'];
    tableHeader: React.CSSProperties['color'];
    darkGrey: React.CSSProperties['color'];
    greyButton: React.CSSProperties['color'];
    orange: React.CSSProperties['color'];
    darkGreyColor: React.CSSProperties['color'];
    border: {
      primary: React.CSSProperties['color'];
    };
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    button?: {
      primary: PaletteOptions['primary'];
      secondary: PaletteOptions['primary'];
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    textTransform: true;
  }

  interface ButtonPropsColorOverrides {
    red: true;
  }
}
