import {
  RECEIVE_USERS,
  ReceiveUsersActionType,
  UsersState
} from "./action-types";

const initialState: UsersState = {
  users: []
};

export default function usersReducer(
  state = initialState,
  action: ReceiveUsersActionType
): UsersState {
  if (action.type === RECEIVE_USERS) {
    return {
      ...state,
      users: action.users
    };
  }
  return state;
}
