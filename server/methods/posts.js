import tumblr from 'tumblr.js';
const env = process.env.NODE_ENV;
const { consumer_key,
  url: blogUrl,
  consumer_secret,
  token,
  token_secret, } = Meteor.settings.credentials.tumblr[env];
const client = tumblr.createClient({ consumer_key, consumer_secret, token, token_secret });
const Future = require('fibers/future');

Meteor.methods({

  GetDrafts(n=1, lastId=0) {
    this.unblock();
    const future = new Future();
    let data = {};
    client.blogDrafts(blogUrl,  { filter: 'html', limit: n, before_id: lastId }, (err, res) => {
      if (err) {
        future.throw(err);
      } else {
        data = res;
        future.return(res);
      };
    });
    future.wait();
    return data;
  },

  GetInfo() {
    this.unblock();
    const future = new Future();
    let data = {};
    client.blogInfo(blogUrl, (err, res) => {
      if (err) {
        future.throw(err);
      } else {
        data = res;
        future.return(res);
      };
    });
    future.wait();
    return data;
  },

});
