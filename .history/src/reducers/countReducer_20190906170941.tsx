/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 15:36:09
 * @LastEditTime: 2019-09-06 17:09:41
 * @LastEditors: Please set LastEditors
 */

import * as types from '../actions/types';


const initialState = {
  count: 0
};


export interface initialState {
  count: number
}

export default function counter( state : initialState = initialState, action : any = {} ) {
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