import React, {Component} from 'react'
import {connect} from 'react-redux'
import {inrement, incrementAsync} from '../../store/actions'

class Home extends Component {
  render() {
    const {count, inrement, incrementAsync} = this.props
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => inrement(2)}>立即增加</button>
        <button onClick={() => incrementAsync(3)}>异步增加</button>
      </div>
    )
  }
}

export default connect(
  state => ({count: state.count}), // 一般属性
  /*(dispatch) => ({
    inrement: (number) =>  dispatch(inrement(number)),
    incrementAsync: dispatch(incrementAsync(number)),
  })*/
  {inrement, incrementAsync}, // 函数属性
)(Home)

/*
容器组件的作用: 给UI组件传递属性数据
  一般属性: 读取state中的特定数据
  函数属性:

  <Home count={state.count}
    inrement={
      (dispatch) => dispatch(inrement())
    }
    incrementAsync={}/>
 */


