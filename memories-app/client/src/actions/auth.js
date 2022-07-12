import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { useNavigate } from 'react-router-dom';


export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const navigate = useNavigate();
    // log in the user

    navigate.push('/');
  } catch (error) {
    console.log(error);
  }
  
}

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const navigate = useNavigate();

    // the user sign up
    navigate.push('/');
  } catch (error) {
    console.log(error);
  }
}