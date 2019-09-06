import {
  ADD_USER,
  DELETE_USER,
  SET_CURRENT_USER,
  DELETE_CURRENT_USER
} from "./types";

export const addUser = (username, password, avatar) => {
  return {
    type: ADD_USER,
    payload: {
      username,
      password,
      avatar
    }
  };
};

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    payload: {
      id
    }
  };
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const removeCurrentUser = () => {
  return {
    type: DELETE_CURRENT_USER
  };
};
