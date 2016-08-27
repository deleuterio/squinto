import React from 'react';
import { Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton, } from 'material-ui';

const BlogCard = React.createClass({

  // Handlers

  handlePost() {
    const { action, id } = this.props;
    action(id);
  },

  // util

  extractImages(raw) {
    return _.map(raw.match(/((http(|s):\/\/)?[^''=\n\r]+\.(jpg|png|jpeg|gif))/ig),
      p => p.replace('"', ''));
  },

  removeImages(raw) {
    return raw.replace(/<img.+?>/g, '');
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
    const images = this.extractImages(body || '');
    const content = this.removeImages(body || '');
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
            <div dangerouslySetInnerHTML={_.zipObject(['__html'], [content])} />
          </CardText>}
        {!thumbnail ? null :
          <CardMedia
            overlay={!summary ? null : <CardTitle title={summary} />} >
            <img src={thumbnail} />
          </CardMedia>}
        {!body || _.isEmpty(images) ? null :
          <CardMedia>
            <img src={_.head(images)} />
          </CardMedia>}
        <CardActions>
          <FlatButton secondary={true} label='Ver' onTouchTap={this.handlePost}/>
        </CardActions>
      </Card>
    );
  },
});

export default BlogCard;
