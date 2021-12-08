import {
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_OTP_FALIURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FALIURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FALIURE,
  RESET
} from "../actionTypes.js";

const initialState = {
  user: null,
  phone: null,
  otp: null,
  loading: false,
  step: 1,
};

function user(state = initialState, action) {
  console.log("user reducer", action);
  switch (action.type) {
    case USER_OTP_REQUEST:
      return { ...state, loading: true };
    case USER_OTP_SUCCESS:
      return { ...state, loading: false, ...action.payload, step: 2 };
    case USER_OTP_FALIURE:
      return { ...state, loading: false, step: 3 };
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, step: 1 };
    case USER_LOGIN_FALIURE:
      return { ...state, loading: false, step: 3 };
    case USER_LOGOUT_REQUEST:
      return { ...initialState };
    case USER_LOGOUT_SUCCESS:
      return { ...initialState };
    case USER_LOGOUT_FALIURE:
      return { ...initialState, step: 3  };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}

export default user;
