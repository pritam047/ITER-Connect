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
    toast.error('Login failed! Try Again!')
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    toast.success('Registered successfully!');
    dispatch({ type: AUTH, data });

    navigate('/');
  } catch (error) {
    toast.error('Registration failed!')
    console.log(error);
  }
};