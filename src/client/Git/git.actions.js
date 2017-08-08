export const LOAD_USER = 'LOAD_USER';
export const LOADING_USER = 'LOADING_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const USER_LOADED = 'USER_LOADED';

export const loadUser = (username) => ({
  type: LOAD_USER,
  username
});

export const loadingUser = () => ({
  type: LOADING_USER,
  loading: true
});

export const userLoaded = () => ({
  type: USER_LOADED,
  loading: false
});

export const loadUserSucess = (user) => ({
  type: LOAD_USER_SUCCESS,
  user
});
