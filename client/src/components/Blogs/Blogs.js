import React, { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../actions/blogs';

import Blog from './Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const { blogs, isLoading } = useSelector((state) => state.blogs);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    // if(!blogs.length && !isLoading) return 'No posts yet. We will be more than happy to see you create one.😃';

    return (
        isLoading ? <CircularProgress /> : (
            <>
            <h1 style={{textAlign:"center"}}>Blogs</h1>
            <div className="blog-container">
                {blogs.map((blog) => (
                        <Blog blog={blog} />
                ))}
            </div>
            </>
        )
    )
}

export default Blogs;
