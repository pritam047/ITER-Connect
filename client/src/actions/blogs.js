import * as api from '../api/index';
import { FETCH_BLOGS, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

export const fetchBlogs = () => async(dispatch) => {
  try {
    const { data } = await api.fetchBlogs();
    console.log(data); // RESULT: data fetched correctly
    dispatch({ type: FETCH_BLOGS, payload: data });
  } catch (error) {
    console.log(error);
  }
}
export const createBlog = (blog, navigate) => async (dispatch) => {
    try {
      const { data } = await api.createBlog(blog);
      navigate(`/posts/?page=1`)
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateBlog = (blog, navigate) => async (dispatch) => {
    try {
      const { data } = await api.createBlog(blog);
      navigate(`/posts/?page=1`)
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteBlog = (blog, navigate) => async (dispatch) => {
    try {
      const { data } = await api.createBlog(blog);
      navigate(`/posts/?page=1`)
      dispatch({ type: DELETE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  