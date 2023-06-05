import { SET_USER_REGISTER } from "../types/types";
const initalState = {
  getUserRequestData: {},
};
export const userRegisterReudcer = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER_REGISTER:
      return { ...state, getUserRequestData: action.payload };
    default:
      return state;
  }
};

export default userRegisterReudcer;
