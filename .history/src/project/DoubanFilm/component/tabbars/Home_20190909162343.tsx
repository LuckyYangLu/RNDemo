import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight,TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'; // 轮播图
import { Actions } from 'react-native-router-flux'; // 路由
const util = require('@/util/AdapterUtil'); // 适配方案一
let unitWidth = util.unitWidth;
const { getPixel } = require('@/util/common'); // 适配方案二


interface typeProps {

};

interface typeState {
  banner: any[],
  swiperIndex: number
};

export default class Home extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props)
    this.state = {
      banner: [],// 轮播图数组
      swiperIndex: 0 // 轮播图索引
    }
    this.goMovieList = this.goMovieList.bind(this);
  }

  componentWillMount() {
    fetch('http://www.liulongbin.top:3005/api/getlunbo')
      .then(res => res.json())
      .then(data => {
        this.setState({
          banner: data.message
        })
      })
  }

  // 跳转到详情页
  goMovieList() {
    Actions.movielist()
  }

  render() {
    return (
      <View style={{ height: getPixel(400) }}>
        {/* 轮播图的结构 */}
        {/* 在 轮播图的 Swiper 组件外面，需要套一层 View，给这个 View 需要手动设置一个高度 */}
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true} index={this.state.swiperIndex} onIndexChanged={(index: any)=>this.setState({swiperIndex: index})}>
          {this.state.banner && this.state.banner.map((item, i) => {
            return (
              <TouchableWithoutFeedback key={i} onPress={()=>this.setState({swiperIndex: i})}>
                <View key={i}>
                  <Image source={{ uri: item.img }} style={{ width: '100%', height: '100%' }}></Image>
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </Swiper>
        {/* 在 RN 中，默认，就已经为 所有的 View 启用了弹性和模型，同时，默认的主轴是 纵向的 */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={styles.box}>
            <Image source={require('../../images/menu1.png')} style={{ width: 60, height: 60 }}></Image>
            <Text>新闻资讯</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../images/menu2.png')} style={{ width: 60, height: 60 }}></Image>
            <Text>图片分析</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../images/menu3.png')} style={{ width: 60, height: 60 }}></Image>
            <Text>商品购买</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../images/menu4.png')} style={{ width: 60, height: 60 }}></Image>
            <Text>视频专区</Text>
          </View>
          <TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
            {/* 在 TouchableHighlight 内部，只能放置唯一的一个元素 */}
            <View>
              <Image source={require('../../images/menu5.png')} style={{ width: 60, height: 60 }}></Image>
              <Text>热映电影</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.box}>
            <Image source={require('../../images/menu6.png')} style={{ width: 60, height: 60 }}></Image>
            <Text>联系我们</Text>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  box: {
    width: '33.33%',
    alignItems: 'center',
    marginTop: 15
  }
})