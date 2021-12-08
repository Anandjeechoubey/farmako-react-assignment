import { put } from "redux-saga/effects";
import { useHistory } from "react-router-dom";

import { loginUserService,
  getOTPService } from "../../services/authService";
import * as types from "../actionTypes";


export function* loginSaga(payload) {
  try {
    const response = yield loginUserService(payload);
    localStorage.setItem('token', response.data.profiles[0].token);
    yield put({ type: types.USER_LOGIN_SUCCESS, payload: response.data.profiles[0] });
  } catch (error) {
    console.log("err in sagaa",error);
    yield put({ type: types.USER_LOGIN_FALIURE, error });
  }
}

export function* getOTPSaga(payload) {
  try {
    const response = yield getOTPService(payload);
    yield put({ type: types.USER_OTP_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.USER_OTP_FALIURE, error });
  }
}

export function* logoutSaga() {
  try {
    localStorage.removeItem('token');
    yield put({ type: types.USER_LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: types.USER_LOGOUT_FALIURE, error });
  }
}