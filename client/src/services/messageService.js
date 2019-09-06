import { callApi } from '../helpers/apiHelper';

export const getAllMessages = () => {
    return callApi('/messages', 'GET').then(
        response => {
            if (!response.ok) return response.text();
            return response.json();
        },
        error => {
            throw Error('Unable to get messages');
        }
    );
};

export const addMessage = (user, avatar, message) => {
    return callApi('/messages', 'POST', { user, avatar, message }).then(
        response => {
            if (!response.ok) return response.text();
        },
        error => {
            throw Error('Unable to post message');
        }
    );
};

export const editMessage = (id, message) => {
    return callApi(`/messages/${id}`, 'PUT', { message }).then(
        response => {
            if (response.status === 404) return 'Message doesn\'t exist';
            else if (!response.ok) return response.text();
        },
        error => {
            throw Error('Unable to edit message');
        }
    );
};

export const deleteMessage = (id) => {
    return callApi(`/messages/${id}`, 'DELETE').then(
        response => {
            if (response.status === 404) return 'Message doesn\'t exist';
            else if (!response.ok) return response.text();
        },
        error => {
            throw Error('Unable to delete message');
        }
    );
};

export const getNewMessageId = (messages) => (Math.max(...messages.map(message => message.id)) + 1).toString();