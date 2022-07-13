import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { useNavigate } from 'react-router-dom';


export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    // log in the user

    navigate.push('/');
  } catch (error) {
    console.log(error);
  }
  
}

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    // the user sign up
    navigate.push('/');
  } catch (error) {
    console.log(error);
  }
}