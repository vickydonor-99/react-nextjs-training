const asyncActions: any = {
  LOGIN_USER: 'LOGIN_USER',
  ADD_USER: 'ADD_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  LOAD_POSTS_START: 'LOAD_POSTS_START',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',
  ADD_POSTS_START: 'ADD_POSTS_START',
  ADD_POSTS_SUCCESS: 'ADD_POSTS_SUCCESS',
  ADD_POSTS_ERROR: 'ADD_POSTS_ERROR',
};

const syncActions: any = {};

const actionTypes = {
  ...asyncActions,
  ...syncActions,
};

export default actionTypes;
