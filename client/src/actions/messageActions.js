import {
    GET_MESSAGES,
    MESSAGES_LOADED,
    ADD_MESSAGE,
    EDIT_MESSAGE,
    DELETE_MESSAGE,
    SUBMIT_NEW_MESSAGE,
    START_EDITING,
    CANCEL_EDITING
} from './types';


export const getMessages = (messages) => {
    return {
        type: GET_MESSAGES,
        messages
    }
}

export const messagesLoaded = (messages) => {
    return {
        type: MESSAGES_LOADED,
        messages
    }
}

export const addMessage = (text) => {
    return {
        type: ADD_MESSAGE,
        text
    }
}

export const startEditing = (initialCommentMessage, messageId) => {
    return {
        type: START_EDITING,
        initialCommentMessage,
        messageId
    }
}

export const cancelEditing = () => {
    return {
        type: CANCEL_EDITING
    }
}

export const editMessage = (id, message) => {
    return {
        type: EDIT_MESSAGE,
        payload: {
            id,
            message
        }
    };
};

export const submitMessage = () => {
    return {
        type: SUBMIT_NEW_MESSAGE
    }
}

export const deleteMessage = (messageId) => {
    return {
        type: DELETE_MESSAGE,
        messageId
    }
}