import React from 'react';
import Pagination from './Pagination.jsx';
import { Snackbar,
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
  LinearProgress, } from 'material-ui';

const Blog = React.createClass({
  // Static data

  postPerPage: 3,
  styles: {
    grid: {
      className: 'mdl-grid',
      ref: 'noReply',
    },
    cell: {
      className: 'mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet mdl-cell--12-col-phone',
    },
  },

  //  Initial state

  getInitialState() {
    return { posts: null, errorOpen: false, total: null };
  },

  // Lifecycle

  componentWillMount() {
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
    const { posts, page } = this.state;
    const lastId = !page ? 0 : _.get(posts, `[${posts.length - 1}].id`);
    Meteor.call('GetDrafts', this.postPerPage, lastId, (err, posts) => {
      if (err) {
        this.setState({ errorOpen: true });
        console.log(err);
      } else {
        this.setState({ posts: _.get(posts, 'posts'), length: _.get(posts, 'posts.length') });
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
        console.log(err);
      } else {
        this.setState({ total: drafts });
      }
    });
  },

  extractImages(raw) {
    return raw.match(/((http(|s):\/\/)?[^"'=\n\r]+\.(jpg|png|jpeg|gif))/ig);
  },

  removeImages(raw) {
    return raw.replace(/((http(|s):\/\/)?[^"'=\n\r]+\.(jpg|png|jpeg|gif))/ig, '');
  },

  getContent(raw) {
    return raw.split(/<img.+?src=[\'"]([^\'"]+)[\'"].*>/g);
  },

  render() {
    const { posts, errorOpen, total } = this.state;
    const { styles } = this;
    return (<div>
      {(_.isNull(posts) && _.isNull(total) ? <LinearProgress mode='indeterminate' /> :
        <div>
          <div {...styles.grid} >
            {_.map(posts, ({ title,
              thumbnail_url: thumbnail,
              caption: cap,
              id,
              date,
              tags,
              body,
              caption,
              type,
              summary, }) =>
              <div {...styles.cell} key={id}>
                <Card style={{ height: '100%' }}>
                  <CardTitle title={title || _.capitalize(type)}
                  subtitle={_.join(tags, ', ')}
                  style={{ paddingBottom: '0px' }} />
                  <CardHeader
                    title={`Publicação em ${moment(new Date(date)).format('DD/MM/YYYY')}`}
                    style={{ paddingTop: '5px' }} />
                  {!body ? null :
                    <CardText>
                      <div dangerouslySetInnerHTML={_.zipObject(['__html'],
                      [this.removeImages(body)])} />
                    </CardText>}
                  {!thumbnail ? null :
                    <CardMedia
                      overlay={!summary ? null : <CardTitle title={summary} />} >
                      <img src={thumbnail} />
                    </CardMedia>}
                  {!body || _.isEmpty(this.extractImages(body || '')) ? null :
                    <CardMedia>
                      <img src={_.head(this.extractImages(body))} />
                    </CardMedia>}
                  <CardActions>
                    <FlatButton secondary={true} label='Ver mais' />
                  </CardActions>
                </Card>
              </div>
            )}
            </div>
        </div>)}
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
