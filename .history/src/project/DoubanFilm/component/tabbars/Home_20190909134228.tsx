import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'; // 轮播图
const { unitWidth } = require('@/util/AdapterUtil'); // 适配


interface typeProps {

};

interface typeState {
  banner: any[]
};

export default class Home extends Component<typeProps, typeState> {
  constructor(props: any) {
    super(props)
    this.state = {
      banner: [] // 轮播图数组
    }
  }

  componentWillMount() {
    fetch('http://www.liulongbin.top:3005/api/getlunbo')
      .then(res => res.json())
      .then(data => {
        // console.warn(JSON.stringify(data, null, '  '))
        this.setState({
          banner: data.message
        })
      })
  }

  render() {
    return (

      <View style={{ height: unitWidth * 440 }}>
        {/* 轮播图的结构 */}
        {/* 在 轮播图的 Swiper 组件外面，需要套一层 View，给这个 View 需要手动设置一个高度 */}
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
          {this.state.banner && this.state.banner.map((item, i) => {
            return <View key={i}>
              <Image source={{ uri: item.img }} style={{ width: '100%', height: '100%' }}></Image>
            </View>
          })}
        </Swiper>
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
  }
})