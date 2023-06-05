// backend axios call\
import { SET_USER_REGISTER } from "../types/types";
export const setUserRegister = (user, token) => {
  console.log("token", token);

  return {
    type: SET_USER_REGISTER,
    payload: {
      user: user,
      token: token,
    },
  };
};
