import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal700, orange500, teal500, teal100, grey900, white, fullBlack }
  from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal700,
    primary2Color: teal500,
    primary3Color: teal100,
    accent1Color: orange500,
    textColor: grey900,
    alternateTextColor: white,
    shadowColor: fullBlack,

  },
}, {
  avatar: {
    borderColor: null,
  },
});

export default muiTheme;
