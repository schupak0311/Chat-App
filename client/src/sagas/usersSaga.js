import { takeEvery, put, call, all } from "redux-saga/effects";
import { fetchUsers } from "../routines/routines";
import * as userService from "../services/userService";
import {
    ADD_USER,
    DELETE_USER
} from '../actions/types';

function* usersRequest() {
  try {
    yield put(fetchUsers.request());

    const response = yield call(userService.getAllUsers);
    if (typeof response === "string") {
      throw new Error(response);
    }

    yield put(fetchUsers.success(response));
  } catch (error) {
    yield put(fetchUsers.failure(error.message));
  } finally {
    yield put(fetchUsers.fulfill());
  }
}

function* watchGetUsers() {
  yield takeEvery(fetchUsers.TRIGGER, usersRequest);
}


function* addUser(action) {
    try {
        const response = yield call(userService.addUser, action.payload.username, action.payload.password, action.payload.avatar);
        if (typeof(response) === 'string') {
            throw new Error(response);
        }

        yield put(fetchUsers());
    } catch(error) {
        yield put(fetchUsers.failure(error.message));
    }
}

function* watchAddUser() {
    yield takeEvery(ADD_USER, addUser);
}

function* deleteUser(action) {
    try {
        const response = yield call(userService.deleteUser, action.payload.id);
        if (typeof(response) === 'string') {
            throw new Error(response);
        }

        yield put(fetchUsers());
    } catch(error) {
        yield put(fetchUsers.failure(error.message));
    }
}

function* watchDeleteUser() {
    yield takeEvery(DELETE_USER, deleteUser);
}


export default function* usersSagas() {
    yield all([
        watchGetUsers(),
        watchAddUser(),
        watchDeleteUser()
    ]);
}

