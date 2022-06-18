import express from "express";
import { getPostsBySearch, createPost, getPosts, getPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
// router.get('/s/check', (req,res) => res.send('check 123'))
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
export default router;