/*
 * @description: 
 * @autor: LuYang
 * @date: Do not edit
 * @lastEditors: Seven
 * @lastEditTime: Do not edit
 */

import * as types from '../actions/types';

const initialState = {
  count: 0
};

export default function counter(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}