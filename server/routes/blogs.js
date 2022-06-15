import express from "express";
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } from "../controllers/blogs.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getBlogs); // get all blogs
router.get('/:id', getBlog); // get blog by id
// router.get('/search', getPostsBySearch);
router.post('/', auth, createBlog); // create a blog
router.patch('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);
// router.patch('/:id/likePost', auth, likePost);
export default router;