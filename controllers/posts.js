import Post from "../models/Posts.js";
import User from "../models/User.js";

// createPost,getFeedPosts,getUserPosts,likePost

// CREATE
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();

    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// READ
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();

    res.status(200).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
//UPDATE
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.header("userId");
    const post = await Post.findById(id);
    if (!userId) {
      return res.status(400).json({ message: "User ID header is missing" });
    }
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const userIdString = userId.toString();

    if (post.likes.has(userIdString)) {
      post.likes.delete(userIdString);
    } else {
      post.likes.set(userIdString, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
