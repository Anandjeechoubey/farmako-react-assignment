import {
  USER_OTP_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
} from "../actionTypes.js";

export const getOTP = (phone) => {
  return {
    type: USER_OTP_REQUEST,
    payload: phone
  };
};

export const loginUser = (phone, otp) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: { phone, otp }
  };
};

export const logoutUser = () => {
  return {
    type: USER_LOGOUT_REQUEST
  };
};