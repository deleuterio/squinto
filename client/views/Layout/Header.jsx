import React from 'react';
import { AppBar, FontIcon, IconButton } from 'material-ui';
import NavigationHome from 'material-ui/svg-icons/action/home';

const Header = React.createClass({

  // styles

  styles: {
    crumb: { style: { cursor: 'pointer' } },
    separator: { style: { marginLeft: 5, marginRight: 5 } },
    appBar: {
      style: { position: 'fixed' },
      zDepth: 4,
      iconElementLeft:
        <IconButton onTouchTap={() => FlowRouter.go('Home')} children={<NavigationHome />} />,
    },
  },

  // meta

  metaTags: [
    { charSet: 'UTF-8' },
    { name: 'description', content: 'sQuinto Advocacia Empresarial - Somos uma empresa de advocacia com atendimento personalizado e atuação em todas as áreas do direito direcionado às empresas.' },
    { name: 'keywords', content: 'advocacia, empresarial, direito, jurídico, escritorio' },
    { name: 'robots', content: 'index, follow' },
    { name: 'content-language', content: 'pt-br' },
  ],

  // links

  links: [{ rel: 'icon', href: '/icons/squinto/mipmap-xhdpi/ic_launcher.png' }],

  // bar title

  getTitle() {
    const { styles, props: { innerWidth, crumbs: { title, content }={} } } = this;
    if (_.isEqual(innerWidth, 'small')) return title;

    return (
      <span>
        {_.flatten(_.map(content, (c, i) => [
          <span {...styles.crumb}
            key={`crumb${i}`}
            onClick={()=>FlowRouter.go(c.path)}>{c.label}</span>,
          <span key={`sep${i}`} {...styles.separator}>/</span>,
        ]))}
        <span>{title}</span>
      </span>
    );
  },

  // render

  render() {
    const { metaTags, styles, links } = this;
    return (
      <header>

        <title>sQuinto - Advocacia empresarial</title>
        {_.map(metaTags, (p, i) => <meta key={i} {...p} />)}
        {_.map(links, (p, i) => <link key={i} {...p} />)}

        <AppBar {...styles.appBar} title={this.getTitle()} />

      </header>
    );
  },
});

export default Header;
