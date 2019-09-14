import {
  AUTHENTICATE,
  AuthenticateActionType,
  AuthState
} from "./action-types";

const initialState: AuthState = {
  auth: {}
};

export default function authenticateReducer(
  state = initialState,
  action: AuthenticateActionType
): AuthState {
  console.log("AUTH REDUCER");
  if (action.type === AUTHENTICATE) {
    console.log("AUTHENTICATE");
    return {
      ...state,
      auth: {
        username: action.username,
        authenticated: true
      }
    };
  }
  return state;
}
