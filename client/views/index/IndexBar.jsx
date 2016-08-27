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
  },

  styles: {
    title: {
      cursor: 'pointer',
    },
    bar: {
      position: 'fixed',
    },
  },

  getInitialState() {
    return { windowHeight: window.innerHeight, innerWidth: window.innerWidth };
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

  handleResize(e) {
    this.setState({ innerHeight: window.innerHeight, innerWidth: innerWidth });
  },

  getTitle(crumbs) {
    const { innerWidth } = this.state;
    if (innerWidth < 840) return 'sQuinto';

    return (
      <span>
      <span>sQuinto</span>
        {_.flatten(_.map(crumbs, (c, i) => [
          <span key={`sep${i}`} style={{ marginLeft: 5, marginRight: 5 }}>/</span>,
          <span key={`crumb${i}`} onClick={()=>FlowRouter.go(c.path)} style={{ cursor: 'pointer' }}>{c.label}</span>,
        ]))}
      </span>
    );
  },

  // Handlers

  render() {
    const { styles, links, props: { content, crumbs }, state: { innerHeight }, state } = this;
    const styleContent = {
      className: 'mdl-layout__content',
      ref: 'newLink',
      style: {
        overflow: 'auto',
        width: '100%',
        marginTop: '64px',
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
            title={this.getTitle(crumbs)}
          />

        </header>
        <main {...styleContent}>
          <div style={{ minHeight: (innerHeight || 0) - 164 }}>{content(state)}</div>
          <Footer />
        </main>
      </div>
    );
  },
});

export default IndexBar;
