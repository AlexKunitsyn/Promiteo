import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      '.MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
        width: 'auto',
      },
    },
    listbox: {
      maxHeight: 200,

      '& ui': {
        top: '0',
        borderRadius: '12px',
      },
      '& li': {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        letterSpacing: '-0.3px',
        textWrap: 'wrap',
      },
    },

    option: {
      fontWeight: 400,
      backgroundColor: palette.darkGreyColor,
      color: palette.greyColor,
      paddingBottom: '14.5px !important',
      paddingLeft: '12px !important',
      paddingTop: '14.5px !important',
      paddingRight: '12px !important',

      '&:hover': {
        color: palette.primary.light,
        background: palette.darkGreyColor,
      },

      '&.MuiAutocomplete-option[aria-selected="true"]': {
        backgroundColor: palette.selectedOptionBackground,
        color: palette.darkGreyColor,
      },

      '&.MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
        backgroundColor: palette.selectedOptionBackground,
        color: palette.darkGreyColor,
      },
    },

    popper: {
      zIndex: 2000,
    },

    paper: {
      boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,

      background: palette.darkGreyColor,
      color: '#fff',
      borderRadius: '12px',
      margin: '0',

      '& ul': {
        boxShadow: 'none',
      },
    },

    '& svg': {
      color: '#FFF',
    },

    '& li': {
      padding: '10px',
      fontSize: '17px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      letterSpacing: '-0.3px',
    },
  },
};
