const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    postCategory: {
      type: String,
      required: false
    },
    userId: {
      type: String,
      required: true
    }
  },
  // SECOND OBJECT ARGUMENT THAT HOLDS TIME STAMPS
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', PostSchema);
