const API_BASE_URL = 'http://localhost:5000';

const getApiUrl = (path) => `${API_BASE_URL}${path}`;

export const callApi = (path, method, body) => {
    const requestPath = getApiUrl(path);

    const requestArgs = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    };

    return fetch(requestPath, requestArgs);
};