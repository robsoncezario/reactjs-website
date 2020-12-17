import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import dark from './dark';
import light from './light';

const ThemeWrapper = (props: any) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = prefersDarkMode ? dark : light;

  return (
    <MuiThemeProvider theme={theme} {...props} />
  );
}

export default ThemeWrapper;
