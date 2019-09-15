/* eslint import/prefer-default-export: 'off', no-unused-vars: 'off',
 function-paren-newline: 'off'  */
import {
  SHOW_TOAST_BOX,
  HIDE_TOAST_BOX,
  ToastState,
  ToastActionType,
} from './action-types';

const initialState: ToastState = {
  show: false,
  message: '',
  type: '',
};

const toastBoxReducer = (
  state = initialState,
  action: ToastActionType) => {
  switch (action.type) {
    case SHOW_TOAST_BOX:
      return {
        show: true,
        message: action.message,
        boxType: action.boxType,
      };
    case HIDE_TOAST_BOX:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};

export default toastBoxReducer;
