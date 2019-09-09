import React, { Component } from 'react';
import { View,Text } from "react-native";
import { Button, Provider, Toast } from '@ant-design/react-native';

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
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

componentDidMount () {
  // document.title = "hello world"
}

 // 处理Button事件
 handleButtonClick () {
  Toast.info('This is a toast tips')
 }

  render() {
    return (
      <Provider>
        <View>
          <Text>
            {this.state.info}
          </Text>
          <Text>
            基本上就是用原生组件比如'View'和'Text' 来代替web组件'div'和'span'。
          </Text>
          <Button onPress={() => Toast.info('This is a toast tips')}>Start</Button>
        </View>
      </Provider>
    );
  }

}