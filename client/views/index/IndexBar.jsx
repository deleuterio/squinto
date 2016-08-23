import React from 'react';
import { AppBar, Tabs, Tab, FontIcon, IconButton } from 'material-ui';
import NavigationHome from 'material-ui/svg-icons/action/home';

const IndexBar = React.createClass({

  // static data

  links: {
    blog: {
      label: 'Artigos',
      icon: 'dashboard',
    },
    location: {
      label: 'Localização',
      icon: 'location_on',
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
    content: {
      className: 'mdl-layout__content',
      style: {
        margin: '0.5em',
        width: '100%',
      },
    },
  },

  // Handlers

  handleTabChange(key) {
    FlowRouter.go(_.capitalize(key));
  },

  render() {
    const { styles, links, props: { content, tab } } = this;
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
        <main {...styles.content}>
          {content}
        </main>
      </div>
    );
  },
});

export default IndexBar;
