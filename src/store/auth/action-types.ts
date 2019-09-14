export interface Auth {
  authenticated?: boolean;
  username: string;
}

export interface AuthState {
  auth: {};
}

// eslint-disable-next-line import/prefer-default-export
export const AUTHENTICATE = "AUTHENTICATE";

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  username: string;
}

export type AuthenticateActionType = AuthenticateAction;
