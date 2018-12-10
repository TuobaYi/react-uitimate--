/*
包含n个action creator函数的模块
 */
import {
  INCREMENT
} from './action-types'
// 同步action
export const inrement = (number) => ({type: INCREMENT, data: number})

// 异步action
export const incrementAsync = (number) => {
  return dispatch => {
    // 1. 执行异步代码
    setTimeout(() => {
      // 2. 有了结果后, 分发同步action
      dispatch(inrement(number))
    }, 1000)

  }
}