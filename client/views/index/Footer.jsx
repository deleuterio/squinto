import React from 'react';

const Footer = React.createClass({

  // Initial state

  getInitialState() {
    return { windowHeight: window.innerHeight - 100 };
  },

  //  Handlers

  handleResize() {
    this.setState({ windowHeight: window.innerHeight - 100 });
  },

  // Lifecycle

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },

  // render

  render() {
    return (
      <footer className='mdl-mini-footer' >
        <div className='mdl-mini-footer__left-section'>
            <div className='mdl-logo'>sQuinto Advocacia Empresarial - 2016 &reg;</div>
        </div>
        <div className='mdl-mini-footer__right-section mdl-layout--large-screen-only'>
            <ul className='mdl-mini-footer__link-list'>
              <li><a href={FlowRouter.path('Home')}>Home</a></li>
              <li><a href={FlowRouter.path('Blog')}>Artigos</a></li>
            </ul>
        </div>
      </footer>
    );
  },
});

export default Footer;
