import React from 'react';
import { Snackbar, CircularProgress,  LinearProgress, RaisedButton } from 'material-ui';

const Process = React.createClass({

  componentDidMount() {
  },

  render() {
    return (<div>
      <div style={{
        overflow: 'hidden', margin: '15px auto', 'max-width': '329px',
      }}>
        <iframe
          src='http://squinto.adv.br/'
          scrolling='no'
          style={{
            border: '0px none',
            marginLeft: '-1068px',
            height: '600px',
            marginTop: '-491px',
            width: '1668px',
          }} />
      </div>
      {/* <embed src="http://squinto.adv.br" /> */}
      </div>
    );
  },
});

export default Process;
