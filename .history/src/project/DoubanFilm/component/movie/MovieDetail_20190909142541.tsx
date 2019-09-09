import React, { Component } from 'react'
import { View, Image, Text, ActivityIndicator, FlatList, StyleSheet, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
  movieTitle: {
    fontWeight: 'bold'
  }
})

// 导入路由的组件
import { Actions } from 'react-native-router-flux'

export default class MovieList extends Component {
  constructor(props:any) {
    super(props)
    this.state = {
      movies: [], // 电影列表
      nowPage: 1, // 当前的页码
      totalPage: 0, // 总页数
      pageSize: 15, // 每页显示的记录条数
      isloading: true // 是否正在加载数据
    }
  }

  componentWillMount() {
  }

  render() {
    return <View>
      这是detail页
    </View>
  }
}