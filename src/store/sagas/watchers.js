import { takeLatest } from "redux-saga/effects";
import { loginSaga, getOTPSaga, logoutSaga } from "./authSaga";

import * as types from "../actionTypes";

export default function* watchUserAuthentication() {
  yield takeLatest(types.USER_LOGIN_REQUEST, loginSaga);
  yield takeLatest(types.USER_OTP_REQUEST, getOTPSaga);
  yield takeLatest(types.USER_LOGOUT_REQUEST, logoutSaga);
}
