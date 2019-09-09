/**
 * 自己的首页
 */

// 导入 react
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator'; // tabbar插件
import { View, Text } from 'react-native';
import Home from './components/tabbars/Home';
import Me from './components/tabbars/Me';

export default class MyHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item title="Home">
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item title="Me">
            <Me />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
