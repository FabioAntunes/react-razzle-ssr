import {
  LOADING_USER,
  LOAD_USER_SUCCESS,
  USER_LOADED
} from './git.actions';

const defaultState = { user: { loading: false} }

export const gitReducer = (state =  defaultState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true
        }
      };
    case USER_LOADED:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false
        }
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...action.user,
          loading: false
        }
      };
    default:
      return state;
  }
};
