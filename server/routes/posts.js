import express from "express";
import { getPostsBySearch, createPost, getPosts, getPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/search', getPostsBySearch);
router.post('/', auth, createPost); //
router.patch('/:id', auth, updatePost); // for update
router.delete('/:id', auth, deletePost); // delete posts
router.patch('/:id/likePost', auth, likePost); // for liking posts
export default router;