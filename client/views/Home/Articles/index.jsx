import React from 'react';
import Card from './Card.jsx';
import { CircularProgress,  LinearProgress, FlatButton, Paper, FontIcon } from 'material-ui';

const Articles = React.createClass({

  // Static data

  postPerPage: 3,
  styles: {
    grid: {
      className: 'mdl-grid',
      ref: 'noReply',
    },
    cell: {
      className: 'mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone',
    },
    seeMore: {
      color: true,
      label: 'Ver mais',
    },
    centerCell(element) {
      return (
        <div className='mdl-cell mdl-cell--12-col'>
          <div className='mdl-layout-spacer' />
          <div className='mdl-cell mdl-cell--8-col mdl-cell--middle' >{element}</div>
          <div className='mdl-layout-spacer' />
        </div>
      );
    },

  },

  //  Initial state

  getInitialState() {
    return { posts: null, errorOpen: false };
  },

  // Lifecycle

  componentDidMount() {
    this.getPosts();
  },

  componentWillUnmount() {
    const { noReply } = this.refs;
    $(noReply).unbind('cut copy paste');
  },

  // Handlers

  handleErrorClose() {
    this.setState({ errorOpen: true });
  },

  // Util

  getPosts() {
    const { posts=[] } = this.state;
    this.setState({ wait: true });
    Meteor.call('GetDrafts', this.postPerPage, _.get(_.last(posts), 'id'), (err, drafts) => {
      if (err) this.setState({ errorOpen: true });
      else {
        this.setState({ posts: _.union(posts, drafts.posts), wait: false });
        const { noReply } = this.refs;
        $(noReply).bind('cut copy paste', function (e) {
          // disable cut, copy, paste
          e.preventDefault();
          return false;
        });
      }
    });
  },

  // render

  render() {
    const { posts, errorOpen } = this.state;
    const { styles } = this;
    return (
      _.isNull(posts) ? <LinearProgress mode='indeterminate' /> :
      <Paper zDepth={0} rounded={false} style={{ backgroundColor: '#00796b' }} {...styles.grid} >
        <div className='mdl-cell mdl-cell--12-col'>
          <a href={FlowRouter.path('Articles')} >
            <button style={{ backgroundColor: '#FF9800' }}
              className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
            <h2 className='mdl-card__title-text' style={{ fontSize: '25px' }}>Artigos</h2>
            </button>
          </a>
        </div>
        {_.isEmpty(posts) ?
          styles.centerCell(<h4 style={{ color: 'white' }}>Nenhuma artigo publicado...</h4>) :
          [
            ..._.map(posts, p => <div {...styles.cell} key={_.get(p, 'id')}><Card {...p} /></div>),
            <div className='mdl-cell mdl-cell--4-col mdl-cell--8-offset' key='more'>
              <FlatButton href={FlowRouter.path('Articles')}
                icon={<FontIcon className="material-icons" style={{ color: 'white' }}>
                  more</FontIcon>}
                labelStyle={{ fontSize: '25px', color: 'white' }}
                label='Ver mais'/>
            </div>,
          ]}
      </Paper>
    );
  },
});

export default Articles;
