/**
 *  @Author LuYang
 *  @date: 2019-09-06 17:21:29
 * @Last Modified by: LuYang
 * @Last Modified time: 2019-09-09 09:20:41
 */

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