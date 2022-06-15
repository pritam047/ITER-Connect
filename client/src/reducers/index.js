import {combineReducers} from 'redux'
import posts from './posts';
import auth from './auth';
import blogs from './blogs';
export const reducers = combineReducers({ posts, auth, blogs });