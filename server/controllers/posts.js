import mongoose from 'mongoose';
import PostMessage from '../models/postMessages.js'

// GET POST by id
export const getPost = async(req, res) =>{

    const { id } = req.params;
    try {
        const post = await PostMessage.findById(id);
                
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET Posts
export const getPosts = async(req, res) =>{

    const { page } = req.query;
    try {
        const LIMIT = 6;
        const startIndex = (Number(page) - 1) * LIMIT; // get starting INDEX of every page
        const total = await PostMessage.countDocuments({});

        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
                
        res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET Posts by search params and tags
export const getPostsBySearch = async(req, res) =>{
    const { searchQuery, tags} = req.query;
    // console.log("fsgsg = ",req.query);
    try {
        const title = new RegExp(searchQuery, 'i');
        const posts = await PostMessage.find({$or: [ { title }, { tags : { $in : tags.split(',') } } ]}
        // ,function (err,res) {
        //     if (err) {
        //         console.log(err);
        //       } else {
        //         console.log("fgdf", res);
        //       }
        // }
        )
                
        res.json({data: posts});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// CREATE Posts
export const createPost = async(req, res) =>{
    const post = req.body;
    // create a new post with the user inputs and the current user logged in details
    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// UPDATE a single Post
export const updatePost = async(req, res) =>{
    const { id } = req.params; // get id of post to update
    const { title, message, creator, selectedFile, tags } = req.body;  // get all field values to update
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`); // check if valid id exists

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    const editedPost = await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(editedPost);
}

// DELETE a single Post
export const deletePost = async(req, res) =>{
    const { id } = req.params; // get id of post to update
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`); // check if valid id exists

    await PostMessage.findByIdAndRemove(id);

    res.json({'message': 'Post deleted successfully'});
}

export const likePost = async(req,res) => {
    const {id} = req.params;
    
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`); // check if valid id exists

    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);  // like the post
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId)); // else, dislike the post
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

    res.json(updatedPost);
}

