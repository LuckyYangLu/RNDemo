import React, { Component } from 'react';
import { View, Image, Text, ActivityIndicator, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
// 导入路由的组件
import { Actions } from 'react-native-router-flux';



interface ITypeProps {

};

interface ITypeState {
  movies: string[], // 电影列表
  nowPage: number, // 当前的页码
  totalPage: number, // 总页数
  pageSize: number, // 每页显示的记录条数
  isloading: boolean // 是否正在加载数据
};


export default class MovieList extends Component<ITypeProps, ITypeState> {
  constructor(props: any) {
    super(props)
    this.state = {
      movies: [], // 电影列表
      nowPage: 1, // 当前的页码
      totalPage: 0, // 总页数
      pageSize: 15, // 每页显示的记录条数
      isloading: true // 是否正在加载数据
    }
    this.getMoviesByPage = this.getMoviesByPage.bind(this);
    this.renderSeparator = this.renderSeparator.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }


  componentWillMount() {
    this.getMoviesByPage()
  }

  // 根据页码获取电影列表
  getMoviesByPage() {
    const start = (this.state.nowPage - 1) * this.state.pageSize
    const url = `https://douban.uieee.com/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`

    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.error('服务器忙，请稍后重试' + res.status)
        }
      })
      .then(data => {
        this.setState({
          isloading: false,
          movies: this.state.movies.concat(data.subjects),
          totalPage: Math.ceil(data.total / this.state.pageSize)
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  // 渲染分割线
  renderSeparator() {
    return <View style={{ borderTopColor: '#ccc', borderTopWidth: 1, marginLeft: 10, marginRight: 10 }}></View>
  }

  // 加载下一页
  loadNextPage() {
    // 如果下一页的页码值，大于总页数了，直接return
    if ((this.state.nowPage + 1) > this.state.totalPage) {
      return
    }

    this.setState({
      nowPage: this.state.nowPage + 1
    }, () => {
      this.getMoviesByPage()
    })
  }

  // 渲染每项电影
  renderItem (item:any){
    return <TouchableHighlight underlayColor="#fff" onPress={() => { Actions.moviedetail({ id: item.id }) }}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={{ uri: item.images.small }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
        <View style={{ justifyContent: 'space-around' }}>
          <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
          <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
          <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
          <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
        </View>
      </View>
    </TouchableHighlight>
  }

  render() {


    return (
      this.state.isloading ?
        <ActivityIndicator size="large"></ActivityIndicator>
        :
        <FlatList
          data={this.state.movies}
          keyExtractor={(item, index) => {return "index" + index + item;}} // 解决 key 问题
          renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
          ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性方法
          onEndReachedThreshold={0.5} // 距离底部还有多远的时候，触发加载更多的事件
          onEndReached={this.loadNextPage} // 当距离不足 0.5 的时候，触发这个方法，加载下一页数据
        />
    );
  }
}


const styles = StyleSheet.create({
  movieTitle: {
    fontWeight: 'bold'
  }
})
