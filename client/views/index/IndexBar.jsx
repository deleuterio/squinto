import React from 'react';
import { AppBar, Tabs, Tab, FontIcon, IconButton } from 'material-ui';
import NavigationHome from 'material-ui/svg-icons/action/home';
import Footer from './Footer.jsx';

const IndexBar = React.createClass({

  // static data

  links: {
    blog: {
      label: 'Artigos',
      icon: 'dashboard',
    },
    contact: {
      label: 'Contato',
      icon: 'call',
    },
    process: {
      label: 'Processos',
      icon: 'search',
    },
  },

  styles: {
    title: {
      cursor: 'pointer',
    },
    bar: {
      // boxShadow: 'none',
      position: 'fixed',
    },
  },

  getInitialState() {
    return { windowHeight: window.innerHeight, innerWidth: innerWidth };
  },

  // lifecycle

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    $(document).ready(() => {
      this.handleResize();
      const LinkTest = {
        externalLinks() {
          $('a[href^=http]').click(() => {
            window.open(this.href);
            return false;
          });
        },
      };

      LinkTest.externalLinks();
    });
  },

  // Handlers

  handleTabChange(key) {
    FlowRouter.go(_.capitalize(key));
  },

  handleResize(e) {
    this.setState({ innerHeight: window.innerHeight, innerWidth: innerWidth });
  },

  // Handlers

  render() {
    const { styles, links, props: { content, tab }, state: { innerHeight }, state } = this;
    console.log(innerHeight);
    const styleContent = {
      className: 'mdl-layout__content',
      ref: 'newLink',
      style: {
        overflow: 'auto',
        width: '100%',
        marginTop: '64px',
        minHeight: (innerHeight || 0) - 241,
        maxHeight: (innerHeight || 0) - 64,
      },
    };
    return (
      <div >
        <header>

          <title>sQuinto - Advocacia empresarial</title>
          <meta charSet='UTF-8' />
          <link rel='icon' href='/icons/squinto/mipmap-xhdpi/ic_launcher.png'/>
          <meta name='description' content='sQuinto Advocacia Empresarial' />
          <meta name='keywords' content='advocacia, empresarial, direito, jurídico' />
          <meta name='content-language' content='pt-br' />
          <AppBar
            style={styles.bar}
            zDepth={4}
            iconElementLeft={
              <IconButton onTouchTap={() => FlowRouter.go('Home')}>
                <NavigationHome />
              </IconButton>}
            title={<span style={styles.title}>sQuinto</span>}
          />

        </header>
        <main {...styleContent}>
          {content(state)}
          <Footer />
        </main>
      </div>
    );
  },
});

export default IndexBar;
