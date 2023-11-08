import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 32,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 32,
    },
    email: {
      type: String,
      required: true,
      min: 2,
      max: 32,
    },
    password: {
      type: String,
      required: true,
      min: 2,
      max: 32,
    },
    picturePath: {
      type: String,
      default:"",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    Occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;


















