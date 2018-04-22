import {
  FETCH_PROFILE_BEGIN,
  FETCH_PROFILE_SUCCES,
  FETCH_PROFILE_ERROR
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null
};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_BEGIN:
      return { ...state, isLoading: true };
    case FETCH_PROFILE_SUCCES:
      return {
        ...state,
        name: action.payload.name,
        isLoading: false
      }
    case FETCH_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false };
    default:
      return state;
  }
};