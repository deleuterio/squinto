import { Class } from 'meteor/jagi:astronomy';

const Posts = new Mongo.Collection('posts');
const Post = Class.create({
  name: 'Post',
  collection: Posts,
  fields: {
    title: {
      type: String,
      validators: [{
          type: 'minLength',
          param: 3,
        },
      ],
    },
    userId: String,
    publishedAt: Date,
  },
  behaviors: {
    timestamp: {},
  },
});
