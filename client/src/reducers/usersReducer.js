import { fetchUsers } from "../routines/routines";

const initialState = {
  users: [],
  loading: false,
  error: null
};

const usersData = (state = initialState, action) => {
  switch (action.type) {
    case fetchUsers.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case fetchUsers.SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case fetchUsers.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case fetchUsers.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default usersData;
