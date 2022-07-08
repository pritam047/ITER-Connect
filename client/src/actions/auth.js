import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { toast } from 'react-toastify';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    toast.success('Login successful!');
    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    if (error.response) {
      console.log(error.response.data); // => the response payload 
      toast.error(`${error.response.data.message}`)
    }
    else {
      toast.error('Login failed! Try Again!')
      console.log(error);
    }
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    toast.success('Registered successfully!');
    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    if (error.response) {
      console.log(error.response.data); // => the response payload 
      toast.error(`Email/${error.response.data.message}`)
    }
    else {
      toast.error('Registration failed!')
      console.log(error);
    }
  }
};