import express from "express";
import { signin, signup, updateUser, getPostsByUser, getUser } from "../controllers/user.js";
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/:id', getUser); // get any user's info
router.patch('/:id', updateUser); // update ImageUrl of user
router.get('/:id/posts', getPostsByUser); // get all posts created by user
export default router;