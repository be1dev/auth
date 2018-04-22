import axios from "axios"
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';
const ROOT_URL = 'https://MeagerBlindTrace-3--be1dev.repl.co/api/v1';


export const signUpUser = data => {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, data )
      .then()
      .catch( error => console.log('error.response:', error.message) )
  };
}

export const signInUser = data => {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, data)
      .then(response => {

        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token)

      })
      .catch(error => console.log('error.response:', error.message))
  };
}
export const signOutUser = () => {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER };
};