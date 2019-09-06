import { createRoutine } from 'redux-saga-routines';

export const auth = createRoutine('AUTH');
export const fetchMessage = createRoutine('FETCH_MESSAGE');
export const fetchMessages = createRoutine('FETCH_MESSAGES');
export const fetchUser = createRoutine('FETCH_USER');
export const fetchUsers = createRoutine('FETCH_USERS');