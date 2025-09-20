const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLength: 8,
  },
  resumedata: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "resumedata",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
