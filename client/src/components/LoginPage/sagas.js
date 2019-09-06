import { takeEvery, put, call } from 'redux-saga/effects';
import { auth } from '../../routines/routines';
import { setCurrentUser } from '../../../App/actions';

import * as loginService from '../../services/loginService';

function* authRequest(action) {
    try {
        yield put(auth.request());

        const response = yield call(loginService.auth, action.payload.username, action.payload.password);
        if (typeof(response) === 'string') {
            throw new Error(response);
        }

        yield put(setCurrentUser(response));
        yield put(auth.success(response));
    } catch(error) {
        yield put(auth.failure(error.message));
    }

}

function* authSaga() {
    yield takeEvery(auth.TRIGGER, authRequest);
}

export default authSaga;