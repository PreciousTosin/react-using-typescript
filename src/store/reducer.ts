import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authenticateReducer from "./auth/authenticationReducer";
import userReducer from "./users/userReducer";
import toastReducer from "./toast/toastReducer";

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth: authenticateReducer,
    users: userReducer,
    toastBox: toastReducer
  });

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
