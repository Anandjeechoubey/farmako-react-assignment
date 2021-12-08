import axios from "axios";

// export const loginUserService = async({ payload}) => {
//   const REGISTER_API_ENDPOINT =
//     "https://accounts.dev.farmako.in/api/users/loginOTP";
// console.log("Check the login service", payload);
//   return axios
//     .post(REGISTER_API_ENDPOINT, {
//         payload
//     })
//     .then((res) => {
//       console.log("Login request success res: ", res);
//       return res;
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// };

// export const getOTPService = async({payload}) => {
//     const REGISTER_API_ENDPOINT =
//       "https://accounts.dev.farmako.in/api/users/sendOTP";
//       const phone = '+91' + payload;
//     return axios
//       .post(REGISTER_API_ENDPOINT, {
//         phone,
//         "isShort": false
//       })
//       .then((res) => {
//         console.log("OTP request success res: ", res);
//         return res;
//       })
//       .catch((err) => {
//         console.log(err);
//         return err;
//       });
//   };

export const loginUserService = async ({ payload }) => {
  const REGISTER_API_ENDPOINT =
    "https://accounts.dev.farmako.in/api/users/loginOTP";
  console.log("Check the login service", payload);
  const phone = "+91" + payload.phone;
  const user = await axios
    .post(REGISTER_API_ENDPOINT, {
      phone,
      otp: payload.otp,
    })
    return user;
};

export const getOTPService = async ({ payload }) => {
  const REGISTER_API_ENDPOINT =
    "https://accounts.dev.farmako.in/api/users/sendOTP";
  const phone = "+91" + payload;
  await axios
    .post(REGISTER_API_ENDPOINT, {
      phone,
      isShort: false,
    })
};
