import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';

const BlogPostCard = React.createClass({

  // Lifecycle

  componentDidMount() {
    const { noReply } = this.refs;
    $(noReply).bind('cut copy paste', function (e) {
      // disable cut, copy, paste
      e.preventDefault();
      return false;
    });
  },

  componentDidLeave() {
    const { noReply } = this.refs;
    $(noReply).unbind('cut copy paste');
  },

  // Static data

  styles: {
    dialog: {
      modal: false,
      autoScrollBodyContent: true,
      contentStyle: {
        width: '95%',
        maxWidth: 'none',
      },
    },
    iframe: {
      frameborder: '0',
      allowfullscreen: '',
      style: {
        width: '480',
        height: '360',
      },
    },
  },

  // util

  extractImages(raw) {
    return _.map(raw.match(/((http(|s):\/\/)?[^''=\n\r]+\.(jpg|png|jpeg|gif))/ig),
      p => p.replace('"', ''));
  },

  splitByImages(raw) {
    return raw.split(/<img.+?>/g);
  },

  // render

  render() {
    const { post, post: { title,
      caption: cap,
      id,
      date,
      tags,
      body,
      caption,
      type,
      summary,
    }={}, } = this.props;
    const { styles } = this;
    const images = this.extractImages(body || cap || '');
    const content = this.splitByImages(body || cap || '');
    const video = _.get(post, 'video.youtube.video_id');
    return (
      <div ref='noReply'>
        <Card style={{ height: '100%' }} >
          <CardHeader
            title={`Publicação em ${moment(new Date(date)).format('DD/MM/YYYY')}`}
            subtitle={_.join(tags, ', ')}
            style={{ paddingTop: '5px' }} />
            {_.map(content, (c, index) => [
              <CardText><div dangerouslySetInnerHTML={_.zipObject(['__html'], [c])} /></CardText>,
              !images[index] ? null : <CardMedia><img src={_.get(images, index)} /></CardMedia>
            ])}
            {!_.isEqual(type, 'video') ? null :
            <CardMedia>
              <iframe src={`https://www.youtube.com/embed/${video}?rel=0`} {...styles.iframe} />
            </CardMedia>}
        </Card>
      </div>
    );
  },
});

export default BlogPostCard;
