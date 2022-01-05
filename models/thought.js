const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true
    maxlength: [200, 'Reaction must be less than 200 characters']
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true
    minlength: 1,
    maxlength: 140
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
    ref: 'User'
  },
  reactions: [{ReactionSchema]
  },
  { toJSON: { virtuals: true },
  id: false
});

ThoughtSchema.virtuals('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;