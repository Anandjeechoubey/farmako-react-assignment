import {
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_OTP_FALIURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FALIURE,
  USER_LOGOUT_REQUEST,
} from "../actionTypes.js";

import axios from "axios";

export const getOTP = (phone) => {
  return (dispatch) => {
    dispatch({ type: USER_OTP_REQUEST });
    axios
      .post("https://accounts.dev.farmako.in/api/users/sendOTP", {
        phone,
        isShort: false,
      })
      .then((res) => {
        console.log("OTP request success res: ", res);
        dispatch({
          type: USER_OTP_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: USER_OTP_FALIURE,
        });
      });
  };
};

export const loginUser = (phone, otp) => {
  return (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    axios
      .post("https://accounts.dev.farmako.in/api/users/loginOTP", {
        phone,
        otp,
      })
      .then((res) => {
        console.log("Login request success res: ", res);
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: USER_LOGIN_FALIURE,
        });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });
  };
};
