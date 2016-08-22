import React from 'react';
import Card from './Card.jsx';
import { Snackbar, CircularProgress,  LinearProgress, RaisedButton } from 'material-ui';

const Blog = React.createClass({

  // Static data

  postPerPage: 9,
  styles: {
    grid: {
      className: 'mdl-grid',
      ref: 'noReply',
    },
    cell: {
      className: 'mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet mdl-cell--12-col-phone',
    },
    seeMore: {
      primary: true,
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
    return { posts: null, errorOpen: false, total: null, wait: false };
  },

  // Lifecycle

  componentDidMount() {
    this.getInfo();
    this.getPosts();
  },

  componentDidLeave() {
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
      if (err) {
        this.setState({ errorOpen: true });

        // console.log(err);
      } else {
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

  getInfo() {
    Meteor.call('GetInfo', (err, { blog: { drafts } }) => {
      if (err) {
        this.setState({ errorOpen: true });

        // console.log(err);
      } else {
        this.setState({ total: drafts });
      }
    });
  },

  render() {
    const { posts, errorOpen, total, wait } = this.state;
    const { styles } = this;
    return (<div>
      {_.isNull(posts) && _.isNull(total) ? <LinearProgress mode='indeterminate' /> :
        <div>
          <div {...styles.grid} >
            {total == 0 ? styles.centerCell(<h4>Nenhuma artigo publicado...</h4>) :
            _.map(posts, p =>
              <div {...styles.cell} key={_.get(p, 'id')}>
                <Card {...p}/>
              </div>
            )}
            {wait ? this.styles.centerCell(<CircularProgress size={1.5} />) :
            posts.length === total ? null :
            this.styles.centerCell(<RaisedButton {...styles.seeMore} onTouchTap={this.getPosts}/>)}
           </div>
        </div>}
        <Snackbar
          open={errorOpen}
          message='Algo deu errado'
          autoHideDuration={4000}
          onRequestClose={this.handleErrorClose} />
      </div>
    );
  },
});

export default Blog;
