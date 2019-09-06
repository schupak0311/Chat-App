import { all } from "redux-saga/effects";

import authSaga from "./authSaga";
import messageSaga from "./messagesSaga";
import usersSaga from "./usersSaga"

export default function* indexSaga() {
  yield all([authSaga(), messageSaga(), usersSaga()]);
}
