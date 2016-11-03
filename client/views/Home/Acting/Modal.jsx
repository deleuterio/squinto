import React from 'react';
import { Dialog, RaisedButton, List, Divider, ListItem, Avatar } from 'material-ui';
import { teal700, transparent } from 'material-ui/styles/colors';

const ActingModal = React.createClass({

  // Render

  render() {
    const { handleClose, open, text, items, innerWidth } = this.props;
    const groupedItems = _.groupBy(_.sortBy(items), i => _.first(i));
    return (
      <Dialog
        title={text}
        actions={<RaisedButton label='Ok' primary={true} onTouchTap={handleClose} />}
        onRequestClose={handleClose}
        modal={false}
        autoScrollBodyContent={true}
        contentStyle={{ width: innerWidth == 'large' ? '70%' : '100%', maxWidth: 'none' }}
        open={open} >

        {_.map(groupedItems, (items, key) => [
            <List key={key} >

              {_.map(items, (i, index) =>
                <ListItem
                  key={i}
                  primaryText={i}
                  insetChildren={index == 0 ? false : true}
                  leftAvatar={index == 0 ?
                    <Avatar color={teal700} backgroundColor={transparent} style={{ left: 8 }} >
                      {key}
                    </Avatar>
                  : undefined}
                />
              )}

            </List>,
            <Divider key={`d${key}`} inset={true} />,
          ]
        )}

      </Dialog>
    );
  },
});

export default ActingModal;
