import tumblr from 'tumblr.js';
const { consumer_key: consumerKey, url: blogUrl } = Meteor.settings.credentials.tumblr;
const client = tumblr.createClient({ consumer_key: consumerKey });
const Future = require('fibers/future');

Meteor.methods({

  getPosts(n=1) {
    this.unblock();
    const future = new Future();
    let data = {};
    client.blogPosts(blogUrl, (err, res) => {
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

  getInfo() {
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
