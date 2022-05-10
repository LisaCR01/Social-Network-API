const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
     username: {
        type: String,
        required: true,
        max_length: 50, 
        trim:true,
        unique: true, 
      },
      email: {
        type: String,
        required: true,
        max_length: 50,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
           user: {
             type: Schema.Types.ObjectId,
             ref: 'User',
           },
        }
     ]
    },
    
    {
      toJSON: {
        virtuals: true,
        getters:true,
      },
    }
  );
  userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

  const User = model('user', userSchema);

  module.exports = User;