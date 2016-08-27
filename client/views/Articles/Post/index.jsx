import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import Card from './Card.jsx';

const BlogPost = React.createClass({

  // Static data

  styles: {
    dialog: {
      modal: false,
      autoScrollBodyContent: true,
      bodyStyle: { padding: 'none' },
      contentStyle: {
        width: '95%',
        maxWidth: 'none',
      },
    },
  },

  // render

  render() {
    const { styles, props: { post, post: { title, type }={} } } = this;
    return (
      <Dialog
        {...styles.dialog}
        title={title || _.capitalize(type)}
        actions={[<FlatButton
        label='Fechar'
        secondary={true}
        onTouchTap={this.props.handleClose} />]}
        onRequestClose={this.props.handleClose}
        open={!_.isUndefined(post)}>
        <Card {...this.props} />
      </Dialog>
    );
  },
});

export default BlogPost;
