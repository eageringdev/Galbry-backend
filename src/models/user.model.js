const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    bio: {
      type: String,
    },
    walletAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
