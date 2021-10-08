const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'I am new!',
  },
  oists: [
    {
      type: Schema.Types.ObjectId, // this will be a reference to a post
      ref: 'Post', // 'Post' : it indicates post model
    },
  ],
});

module.exports = mongoose.model('User', userSchema);

// we can now use user model to set up a sign up and later, also a login route
