import palette from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';

export const muiTheme = {
  palette,
  typography,
  components,
  shape: {
    borderRadius: 5,
    // other shape properties...
  },
  breakpoints: { values: breakpoints.breakpointValues },
};
