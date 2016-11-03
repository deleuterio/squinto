import React from 'react';
import { List, ListItem, Divider, CardTitle, FontIcon, IconButton, Card,
  CardMedia,
  CardText,
  GridList,
  Subheader,
  GridTile,
  Paper,
  Avatar, } from 'material-ui';
import NavigationHome from 'material-ui/svg-icons/action/home';
import Business from './Business/index.jsx';
import Acting from './Acting/index.jsx';
import Contact from './Contact/index.jsx';
import Articles from './Articles/index.jsx';

const Home = React.createClass({

  // Static data

  styles: {
    topCard: {
      className: 'mdl-typography--text-center',
      style: {
        position: 'relative',
        height: '400px',
        width: 'auto',
        backgroundColor: '#f3f3f3',
        background: 'url(\'./assets/stf1.jpg\') center 30% no-repeat',
        backgroundSize: 'cover',
      },
    },
    topCardContent: {
      style: {
        marginTop: '170px',
        fontSize: '20px',
        lineHeight: 1,
        color: '#FFF',
        fontWeight: 500,
      },
    },
  },

  texts: {
    block1: {
      title: 'A empresa',
      text: 'Atendimento personalizado em todas as áreas do direito direcionado às empresas',
    },
  },

  render() {
    const { styles, texts, props: { innerWidth } } = this;

    return (
      <div>

        <Paper zDepth={2} rounded={false} {...styles.topCard}>
          <img src='logo-full-white.png' style={{ height: '135px' }}/>
        	<div {...styles.topCardContent}>{texts.block1.text}</div>
        </Paper>

        <Business />
        <Acting innerWidth={innerWidth}/>
        <Articles />
        <Contact />

      </div>
    );
  },
});

export default Home;
