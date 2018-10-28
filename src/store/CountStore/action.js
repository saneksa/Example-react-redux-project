import { MINUS, PLUS } from './actionTypes';

export const Plus = payload => ({
  type: PLUS,
  payload
});

export const Minus = payload => ({
  type: MINUS,
  payload
});
