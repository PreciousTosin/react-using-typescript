/* eslint import/prefer-default-export: 'off' */
import { Auth, AUTHENTICATE } from "./action-types";

export function authenticate(authPayload: Auth) {
  return {
    type: AUTHENTICATE,
    username: authPayload.username
  };
}
