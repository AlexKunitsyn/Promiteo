import { createTheme } from '@mui/material/styles';
import typography from '../typography';

const theme = createTheme();

export default {
  styleOverrides: {
    root: {
      zIndex: 5000,
    },

    outlined: {



    },

    select: {
      ...typography.subtitle1,
      [theme.breakpoints.down('sm')]: {
        ...typography.subtitle2,
      },
    },

    iconOutlined: {
      fontSize: 13,
      right: 27,
    },

    iconOpen: {
      right: 27,
    },


    iconFilled: {
      fontSize: 13,
      right: 20,
      top: 'calc(50% - 8px)',
    },
  },
};
