import React, { Component } from 'react';
import { View,Text } from "react-native";

interface MainProps {
  info:string
}

interface MainState {
  info: string
}

export default class Main extends Component <MainProps, MainState> {
  constructor(props) {
    super(props);
    this.state= {
      info: '如果你喜欢在Web上使用React，那你也肯定会喜欢React Native'
    }
  }


  render() {
    return (
      <View>
        <Text>
          {this.state.info}
        </Text>
        <Text>
          基本上就是用原生组件比如'View'和'Text' 来代替web组件'div'和'span'。
        </Text>
      </View>
    );
  }

}