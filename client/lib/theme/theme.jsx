import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo700, orange500, indigo500, indigo100, grey900, white, fullBlack }
  from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo700,
    primary2Color: indigo500,
    primary3Color: indigo100,
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
