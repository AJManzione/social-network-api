const { Schema, model } = require('mongoose');
const { Thought } = require('.');
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

const thoughtSchema = new Schema( {
    thoughtText: {
        type: String,
        required: true,
        max_length: 128,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createAtVal) => dateFormat(createAtVal),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}
);


thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });

const Thought = model("thought", thoughtSchema);

module.exports = Thought