import React, { Component } from 'react'

import { View, Image, Text, ActivityIndicator, ScrollView } from 'react-native'

interface ITypeProps {
  id: number
};

interface ITypeState {
  movieInfo: { images: any, summary: any, title: any }, // 电影详情
  isloading: boolean // 是否正在加载数据
};


export default class MovieDetail extends Component<ITypeProps, ITypeState> {
  constructor(props: any) {
    super(props)
    this.state = {
      movieInfo: {
        images: '', summary: '', title: ''
      }, // 电影信息
      isloading: true
    }
  }

  componentWillMount() {
    fetch('https://api.douban.com/v2/movie/subject/' + this.props.id)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieInfo: data,
          isloading: false
        })
      })
  }

  render() {
    return <View>
      {
        this.state.isloading ?
        <ActivityIndicator size="large"></ActivityIndicator>
        :
        <ScrollView>
          <View style={{ padding: 4 }}>
            <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20, marginBottom: 20 }}>{this.state.movieInfo.title}</Text>

            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: this.state.movieInfo.images.large }} style={{ width: 200, height: 280 }}></Image>
            </View>

            <Text style={{ lineHeight: 30, marginTop: 20 }}>{this.state.movieInfo.summary}</Text>
          </View>
        </ScrollView>
      }
    </View>
  }

}
