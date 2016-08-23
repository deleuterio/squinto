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
      boxShadow: 'none',
    },
  },

  getInitialState() {
    return { windowHeight: window.innerHeight };
  },

  // lifecycle

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    $(document).ready(() => {
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
    this.setState({ innerHeight: window.innerHeight });
  },

  // Handlers

  render() {
    const { styles, links, props: { content, tab }, state: { innerHeight } } = this;
    const styleContent = {
      className: 'mdl-layout__content',
      ref: 'newLink',
      style: {
        width: '100%',
        minHeight: innerHeight - 241,
      },
    };
    return (
      <div>
        <AppBar
          style={styles.bar}
          iconElementLeft={
            <IconButton onTouchTap={() => FlowRouter.go('Home')}>
              <NavigationHome />
            </IconButton>}
          title={<span style={styles.title}>sQuinto</span>}
        />
        <Tabs value={tab} onChange={this.handleTabChange}>
          {_.map(links, ({ label, icon }, k) =>
            <Tab
              icon={<FontIcon className='material-icons'>{icon}</FontIcon>}
              value={k}
              key={k}
              label={label}
            />)}
        </Tabs>
        <main {...styleContent}>
          {content}
        </main>
        <Footer />
      </div>
    );
  },
});

export default IndexBar;
