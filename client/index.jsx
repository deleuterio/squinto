import 'material-design-lite/material.min.css';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './lib/theme/theme.jsx';
import Layout from './views/Layout/index.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
_ = lodash;

const MainLayout = (content) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout {...content} />
  </MuiThemeProvider>
);

export default MainLayout;
