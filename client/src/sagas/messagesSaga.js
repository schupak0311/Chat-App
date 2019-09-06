import { takeEvery, put, call, all } from 'redux-saga/effects';
import { fetchMessages } from '../routines/routines';
import * as messageService from '../services/messageService';
import {
    ADD_MESSAGE,
    EDIT_MESSAGE,
    DELETE_MESSAGE
} from '../actions/types';

function* messagesRequest() {
    try {
        yield put(fetchMessages.request());

        const response = yield call(messageService.getAllMessages);
        if (typeof(response) === 'string') {
            throw new Error(response);
        }

        yield put(fetchMessages.success(response));
    } catch(error) {
        yield put(fetchMessages.failure(error.message));
    } finally {
        yield put(fetchMessages.fulfill());
    }
}

function* watchGetMessages() {
    yield takeEvery(fetchMessages.TRIGGER, messagesRequest);
}


function* addMessage(action) {
    try {
        const response = yield call(messageService.addMessage, action.payload.user, action.payload.avatar, action.payload.message);
        if (typeof(response) === 'string') {
            throw new Error(response);
        }

        yield put(fetchMessages());
    } catch(error) {
        yield put(fetchMessages.failure(error.message));
    }
}

function* watchAddMessage() {
    yield takeEvery(ADD_MESSAGE, addMessage);
}


function* editMessage(action) {
    try {
        const response = yield call(messageService.editMessage, action.payload.id, action.payload.message);
        if (typeof(response) === 'string') {
            throw new Error(response);
        }

        yield put(fetchMessages());
    } catch(error) {
        yield put(fetchMessages.failure(error.message));
    }
}

function* watchEditMessage() {
    yield takeEvery(EDIT_MESSAGE, editMessage);
}

function* deleteMessage(action) {
    try {
        const response = yield call(messageService.deleteMessage, action.payload.id);
        if (typeof(response) === 'string') {
            throw new Error(response);
        }

        yield put(fetchMessages());
    } catch(error) {
        yield put(fetchMessages.failure(error.message));
    }
}

function* watchDeleteMessage() {
    yield takeEvery(DELETE_MESSAGE, deleteMessage);
}


export default function* messageSagas() {
    yield all([
        watchGetMessages(),
        watchAddMessage(),
        watchEditMessage(),
        watchDeleteMessage()
    ]);
}