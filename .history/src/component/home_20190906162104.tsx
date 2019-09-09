import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


import FirstPage from './firstPage';
// import TwoPage from './TwoPage';

interface typeProps {
  state: any,
  actions: any,
};

interface typeState {
};


class App extends Component <typeProps, typeState>{

  constructor(props:any) {
    super(props);
  }

  render() {

    const { state, actions } = this.props;

    return (
      <FirstPage
        count={state.count}
        {...actions} />
    );
  }
}

//connect负责把React Component 和 Redux store 结合起来。通过connect，你就可以拿到store中的state，并转化成Component的props来使用了
export default connect(state => ({
  //counter是reducer的文件名，否则会报返回不是一个对象的错误
  state: state.count
}),
  (dispatch) => ({
    //counterActions要包含组件触发的action，需要在改组件里导入相应的action
    actions: bindActionCreators(actions, dispatch)
  })
)(App);
