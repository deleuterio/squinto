import 'material-design-lite/material.min.css';
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
      <title>sQuinto - Advocacia empresarial</title>
      <meta charSet='UTF-8' />
      <link rel='icon' href='/icons/squinto/mipmap-hdpi/ic_launcher.png'/>
      <meta name='description' content='sQuinto Advocacia Empresarial' />
      <meta name='keywords' content='advocacia, empresarial, direito, jurídico' />
      <meta name='content-language' content='pt-br' />
    </header>
    <MuiThemeProvider muiTheme={muiTheme}>
      <IndexBar {...content} />
    </MuiThemeProvider>
  </div>
);

export default MainLayout;
