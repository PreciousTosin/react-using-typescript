/* eslint import/prefer-default-export: 'off' */
import { Users, RECEIVE_USERS } from "./action-types";

export function fetchUsers(userPayload: Users) {
  return {
    type: RECEIVE_USERS,
    users: userPayload.users
  };
}
