/**
 * @description
 * @autor LuYang
 * @date Do not edit
 * @lastEditors Seven
 * @lastEditTime Do not edit
 */

import * as types from '../actions/types';
import { number } from 'prop-types';


const initialState = {
  count: 0
};

export interface initialState {
  count: number
}

export default function counter( state : any = initialState, action : any = {} ) {
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