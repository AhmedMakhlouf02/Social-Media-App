import mongoose from "mongoose";


const PostSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  picturePath: {
    type: String
  },
  userPicturePath: {
    type: String
  },
  likes:{
    type: Map,
    of: Boolean,
  },
  comments: {
    type: Array,
    default: []
  }
},{timestamp: true});

const Post = mongoose.model("Post", PostSchema);


export default Post;