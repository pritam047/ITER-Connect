import mongoose from 'mongoose';
import Blog from '../models/blog.js';

// GET ALL blogs
export const getBlogs = async(req, res) =>{

    try {
        const blogs = await Blog.find({}).sort({ _id: -1 });
                
        res.status(200).json(blogs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET a single blog by ID
export const getBlog = async(req, res) =>{
    const { id } = req.params;
    try {
        const post = await Blog.find({}).sort({ _id: -1 });
                
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// CREATE a Blog
export const createBlog = async(req, res) =>{
    const blog = req.body;

    // create a new post with the user inputs and the current user logged in details
    const newBlog = new Blog({ ...blog, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBlog = async(req,res) => {
    const { id } = req.params; // get id of post to update
    const { title, image, body } = req.body;  // get all field values to update
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`); // check if valid id exists

    const updatedBlog = { title, image, body, _id: id };

    const editedBlog = await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });

    res.json(editedBlog);
}

export const deleteBlog = async(req,res) => {
    const { id } = req.params; // get id of post to update
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`); // check if valid id exists

    await Blog.findByIdAndRemove(id);

    res.json({'message': 'Blog deleted successfully'});
}
