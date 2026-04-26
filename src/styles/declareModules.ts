import '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
  // Регистрация кастомных вариантов типографики для темы Promiteo
  interface TypographyVariants {
    h5Bold: React.CSSProperties;
    title: React.CSSProperties;
    body1Bold: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    subtitle3: React.CSSProperties;
    subtitle4: React.CSSProperties;
    subtitle5: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    overline1: React.CSSProperties;
  }

  // Опции для функции createTheme (делаем поля необязательными)
  interface TypographyVariantsOptions {
    h5Bold?: React.CSSProperties;
    title?: React.CSSProperties;
    body1Bold?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    subtitle4?: React.CSSProperties;
    subtitle5?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
    overline1?: React.CSSProperties;
  }

  // Расширение палитры под структуру проекта
  interface Palette {
    mainTextColor: string;
    gray: string;
    mainColor: string;
    secondaryDark: string;
    blackMain: string;
    yellow: string;
    green: string;
    splitDivider: string;
    lightGreen: string;
    darkGray: string;
    currencyRow: string;
    contrastGray: string;
    activeCategoryNotification: string;
    contractorRow: string;
    contractRow: string;
    secondaryGray: string;
    errorText: string;
    consumptionColor: string;
    tableHeader: string;
    darkGrey: string;
    greyButton: string;
    orange: string;
    darkGreyColor: string;
    border: {
      primary: string;
    };
  }

  interface PaletteOptions {
    mainTextColor?: string;
    gray?: string;
    mainColor?: string;
    secondaryDark?: string;
    blackMain?: string;
    yellow?: string;
    green?: string;
    splitDivider?: string;
    lightGreen?: string;
    darkGray?: string;
    currencyRow?: string;
    contrastGray?: string;
    activeCategoryNotification?: string;
    contractorRow?: string;
    contractRow?: string;
    secondaryGray?: string;
    errorText?: string;
    consumptionColor?: string;
    tableHeader?: string;
    darkGrey?: string;
    greyButton?: string;
    orange?: string;
    darkGreyColor?: string;
    border?: {
      primary?: string;
    };
  }
}

// Позволяет использовать кастомные варианты в пропсе variant компонента Typography
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h5Bold: true;
    title: true;
    body1Bold: true;
    body3: true;
    body4: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    caption2: true;
    caption3: true;
    overline1: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    red: true;
  }
}