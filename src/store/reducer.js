/*
产生初始状态或新的状态的reducer函数
 */
import {combineReducers} from 'redux'

import {
  INCREMENT
} from './action-types'

const initCount = 0
function count(state=initCount, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    default:
      return state
  }
}

const initXxx = {}
// 管理的状态是: {}
function xxx(state=initXxx, action) {
  switch(action.type) {

    default:
      return state
  }
}

const initYyy = []
// 管理的状态是: []
function yyy(state=initYyy, action) {
  switch(action.type) {

    default:
      return state
  }
}

// 向外暴露是整合多个reducer产生的新的reducer
// 新的reducer管理的状态: {xxx: xxx(), yyy: yyy(), count: count()}
export default combineReducers({
  xxx,  // {}
  yyy,  // []
  count
})