import { combineReducers } from 'redux';

import currentUser from './userReducer';
import loginData from './authReducer';
import messageData from './chatReducer';
import usersData from './usersReducer'
import editedMessage from './editedMessage'

export default combineReducers({
    currentUser,
    loginData,
    messageData,
    usersData,
    editedMessage
});