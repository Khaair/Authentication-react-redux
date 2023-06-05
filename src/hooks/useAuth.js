import React from "react";
import axios from "axios";
import { store } from "../statemanagement/store";

export default function useAuth() {
  const getToken =
    store.getState()?.userRegisterReudcer?.getUserRequestData?.token;
  console.log("getToken", getToken);
  if (getToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken}`;
    return true;
  } else {
    return false;
  }
}
