import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

const IndexBar = React.createClass({

  // styles

  styles: {
    main() {
      return {
        className: 'mdl-layout__content',
        style: {
          overflow: 'auto',
          width: '100%',
          marginTop: '64px',
          maxHeight: (_.get(this, 'state.innerHeight') || 0) - 64,
        },
      };
    },

    content() {
      return {
        style: { minHeight: (_.get(this, 'state.innerHeight') || 0) - 164 },
      };
    },
  },

  // initial state

  getInitialState() {
    return {
      windowHeight: window.innerHeight,
      innerWidth: window.innerWidth > 840 ? 'large' : 'small',
    };
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

  // handlers

  handleResize(e) {
    this.setState({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth > 840 ? 'large' : 'small',
    });
  },

  // render

  render() {
    const { styles, props: { content, crumbs } } = this;
    return (
      <div>
        <Header {...this.props} {...this.state} />
        <main {..._.bind(styles.main, this)()} >
          <div {..._.bind(styles.content, this)()} >
            {content(this.state)}
          </div>
          <Footer {...this.props} {...this.state} />
        </main>
      </div>
    );
  },
});

export default IndexBar;
