export interface Users {
  users: Array<object>;
}

export interface UsersState {
  users: Array<object>;
}

// eslint-disable-next-line import/prefer-default-export
export const RECEIVE_USERS = "RECEIVE_USERS";

interface ReceiveUsersAction {
  type: typeof RECEIVE_USERS;
  users: Array<object>;
}

export type ReceiveUsersActionType = ReceiveUsersAction;
