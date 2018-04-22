import axios from "axios";
import {
  FETCH_PROFILE_SUCCES,
  FETCH_PROFILE_BEGIN,
  FETCH_PROFILE_ERROR
} from "./types";
const ROOT_URL = "https://MeagerBlindTrace-3--be1dev.repl.co/api/v1";

export const fetchProfile = () => {
  return dispatch => {

    dispatch({ type: FETCH_PROFILE_BEGIN })
    
    axios.get(`${ROOT_URL}/profile`,
      { headers: { authorization: localStorage.getItem("token")}
    })
      .then(response => {
        dispatch({ type: FETCH_PROFILE_SUCCES, payload: response.data})
      })
      .catch(error => {
        dispatch({ type: FETCH_PROFILE_ERROR, payload: error})
      })
  };
};
