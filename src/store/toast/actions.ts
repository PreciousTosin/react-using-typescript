/* eslint import/prefer-default-export: 'off', no-unused-vars: 'off',
 function-paren-newline: 'off'  */
import {
  Toast,
  SHOW_TOAST_BOX,
  HIDE_TOAST_BOX,
  ToastActionType,
} from './action-types';

export function showToastBox(payload: Toast): ToastActionType {
  return {
    type: SHOW_TOAST_BOX,
    message: payload.message,
    boxType: payload.boxType,
  };
}

export function hideToastBox(): ToastActionType {
  return {
    type: HIDE_TOAST_BOX,
  };
}
