import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'; // 轮播图
const { unitWidth } = require('@/util/AdapterUtil'); // 适配


interface typeProps {

};

interface typeState {
  banner: String []
};

export default class Home extends Component<typeProps, typeState> {
  constructor(props:any) {
    super(props)
    this.state = {
        banner: [] // 轮播图数组
    }
  }

  componentWillMount() {
    console.warn('heelo')
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
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
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