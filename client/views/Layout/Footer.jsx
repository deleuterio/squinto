import React from 'react';

const Footer = React.createClass({

  // styles

  styles: {
    footer: { className: 'mdl-mini-footer' },
    leftContent: { className: 'mdl-mini-footer__left-section' },
    rightContent: { className: 'mdl-mini-footer__right-section mdl-layout--large-screen-only' },
    list: { className: 'mdl-mini-footer__link-list' },
  },

  // list

  list: {
    Home: 'Home',
    Articles: 'Artigos',
  },

  // render

  render() {
    const { styles, list } = this;
    return (
      <footer {...styles.footer} >
        <div {...styles.leftContent} >
          <div className='mdl-logo' >
            sQuinto Advocacia Empresarial - 2016 &reg;
          </div>
        </div>
        <div {...styles.rightContent} >
            <ul {...styles.list} >
              {_.map(list, (label, route) =>
                <li key={route}><a href={FlowRouter.path(route)} >{label}</a></li>)}
            </ul>
        </div>
      </footer>
    );
  },
});

export default Footer;
