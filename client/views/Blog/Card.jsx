import React from 'react';
import { Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton, } from 'material-ui';

const BlogCard = React.createClass({

  // util

  extractImages(raw) {
    return raw.match(/((http(|s):\/\/)?[^''=\n\r]+\.(jpg|png|jpeg|gif))/ig);
  },

  removeImages(raw) {
    return raw.replace(/((http(|s):\/\/)?[^''=\n\r]+\.(jpg|png|jpeg|gif))/ig, '');
  },

  getContent(raw) {
    return raw.split(/<img.+?src=[\'']([^\'']+)[\''].*>/g);
  },

  // render

  render() {
    const { title,
      thumbnail_url: thumbnail,
      caption: cap,
      id,
      date,
      tags,
      body,
      caption,
      type,
      summary, } = this.props;
    return (
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
          <FlatButton secondary={true} label='Ver' />
        </CardActions>
      </Card>
    );
  },
});

export default BlogCard;
