// index 项目的根组件
// 导入组件
import React, { Component } from 'react';
import RouterMap from './router/routerMap';

export default class ProjectRoot extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <RouterMap />;
  }
}
