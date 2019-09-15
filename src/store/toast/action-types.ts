export interface Toast {
  type?: string;
  message: string;
  boxType: string;
}

export interface ToastState {}

export const SHOW_TOAST_BOX = 'SHOW_TOAST_BOX';
export const HIDE_TOAST_BOX = 'HIDE_TOAST_BOX';


export interface showToastAction {
  type: typeof SHOW_TOAST_BOX;
  message: string;
  boxType: string;
}

export interface hideToastAction {
  type: typeof HIDE_TOAST_BOX;
}

export type ToastActionType = showToastAction | hideToastAction;
