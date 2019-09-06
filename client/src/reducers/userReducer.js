import {
  SET_CURRENT_USER,
  DELETE_CURRENT_USER
} from '../actions/types';

const initialState = null;

const currentUser = (state = initialState, action) => {
  switch(action.type) {
      case SET_CURRENT_USER:
          return {
              ...action.user
          };
      case DELETE_CURRENT_USER:
          return null;
      default:
          return state;
  }
};

export default currentUser;