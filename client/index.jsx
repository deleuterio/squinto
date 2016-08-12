import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './lib/theme/theme.jsx';
import IndexBar from './views/index/IndexBar.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
_ = lodash;

const MainLayout = (content) => (
  <div>
    <header>
      <title>Squinto</title>
    </header>
    <MuiThemeProvider muiTheme={muiTheme}>
      <IndexBar {...content} />
    </MuiThemeProvider>
  </div>
);

export default MainLayout;
