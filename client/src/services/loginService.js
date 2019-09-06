import { callApi } from '../helpers/apiHelper';

export const auth = (username, password) => {
    return callApi('/login', 'POST', { username, password }).then(
        response => {
            if (response.status === 401) return 'Invalid credentials';
            return response.json();
        },
        error => console.log(error)
    );
};