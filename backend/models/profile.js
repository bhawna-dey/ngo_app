const mongoose= require('mongoose');

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
        type: String,
        required: true,
      },
    about: {
        type: String,
        required: true,
      },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("profile", profileSchema);

module.exports=Profile;