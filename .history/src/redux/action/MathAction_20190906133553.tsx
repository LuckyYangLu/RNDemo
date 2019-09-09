/*
 * @Description: 事件派发中心
 * @Autor: LuYang
 * @Date: 2019-09-06 13:29:51
 * @LastEditors: Seven
 * @LastEditTime: 2019-09-06 13:35:53
 */

import * as type from './MathType'
export function increase() {
    return {
        type: type.INCREASE
    }
};

export function decrease() {
    return {
        type: type.DECREASE
    }
};

export function reset() {
    return {
        type: type.RESET
    }
};