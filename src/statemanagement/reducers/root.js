import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userRegisterReudcer from "./userRegisterReducer";
const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "addVariantReducer",
    "setComplianceIdReudcer",
    "setSketchIdReudcer",
    // "recoverEmailReudcer",
    // "recoverPhoneNumberReudcer",
  ],
};

const rootReducer = combineReducers({
  userRegisterReudcer,
});
export default persistReducer(persistConfig, rootReducer);
