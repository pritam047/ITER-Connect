import axios from  'axios';
import { config } from '../Constants';

let  baseUrl = config.url.API_URL;
const API = axios.create({ baseURL: baseUrl }); // server url
// https://moments-server21.herokuapp.com
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

// post routes  
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//blog routes
export const createBlog = (newBlog) => API.post('/blogs', newBlog);
export const fetchBlogs = () => API.get(`/blogs`);
export const fetchBlog = (id) => API.get(`/blogs/${id}`);
export const updateBlog = (id, updatedBlog) => API.patch(`/blogs/${id}`, updatedBlog);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

// user routes
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchPostsByUser = (id) => API.get(`/user/${id}/posts`);
export const getUserInfo = (id) => API.get(`/user/${id}`);


