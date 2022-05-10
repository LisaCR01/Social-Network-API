const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: "Please enter a reaction between 1 and 100 characters long!",
        minLength: 1,
        maxLength: 100,
      },
      username: {
        type: String,
        required: "Please enter your Username!",
      },
      createdAt: {
        type: Date,
        default: moment().format('DD-MM-YYYYTHH:mm:ss'),
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength:2,
      default: 'Unnamed thought',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thoughts = model("Thoughts", thoughtSchema);

module.exports = { Thoughts };