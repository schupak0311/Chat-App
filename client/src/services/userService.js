import { callApi } from "../helpers/apiHelper";

export const getAllUsers = () => {
  return callApi("/users", "GET").then(
    response => {
      if (!response.ok) return response.text();
      return response.json();
    },
    error => {
      throw Error("Unable to get users");
    }
  );
};

export const addUser = (username, password, avatar) => {
    return callApi('/users', 'POST', { username, password, avatar }).then(
        response => {
            if (!response.ok) return response.text();
        },
        error => {
            throw Error('Unable to add user');
        }
    );
};

export const deleteUser = (id) => {
    return callApi(`/users/${id}`, 'DELETE').then(
        response => {
            if (response.status === 404) return 'User doesn\'t exist';
            else if (!response.ok) return response.text();
        },
        error => {
            throw Error('Unable to delete user');
        }
    );
};