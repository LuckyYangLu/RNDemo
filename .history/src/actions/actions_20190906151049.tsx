/*
 * @Description: 
 * @Autor: LuYang
 * @Date: 2019-09-06 14:38:35
 * @LastEditors: Seven
 * @LastEditTime: 2019-09-06 15:10:49
 */

import * as types from './types';
export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}