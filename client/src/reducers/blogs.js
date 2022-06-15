import { FETCH_BLOGS, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
const blogReducer = (state = { isLoading: true, blogs: [] }, action) => {
    switch (action.type) {
      case FETCH_BLOGS:
        return {
          ...state,
          blogs: action.payload,
          isLoading: false
        };
      case CREATE:
        return { ...state, blogs: [...state.blogs, action.payload] };
      case UPDATE:
        return { ...state, blogs: state.blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog)) };
      case DELETE:
        return { ...state, blogs: state.blogs.filter((blog) => blog._id !== action.payload) };
      default:
        return state;
    }
};

export default blogReducer;