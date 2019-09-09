/**
 * 自己的首页
 */

// 导入 react
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator'; // tabbar插件
import { View, StyleSheet } from 'react-native';
import Home from './components/tabbars/Home';
import Me from './components/tabbars/Me';
import Search from './components/tabbars/Search';
import ShopCar from './components/tabbars/ShopCar';

export default class MyHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home' // 默认选中 home
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="主页"
            renderIcon={() => <Icon name="home" size={25} color="gray" />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => (
              <Icon name="home" size={25} color="#0079FF" />
            )} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="搜索"
            renderIcon={() => <Icon name="search" size={25} color="gray" />}
            renderSelectedIcon={() => (
              <Icon name="search" size={25} color="#0079FF" />
            )}
            onPress={() => this.setState({ selectedTab: 'search' })}>
            <Search />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'shopcar'}
            title="购物车"
            renderIcon={() => (
              <Icon name="shopping-cart" size={25} color="gray" />
            )}
            renderSelectedIcon={() => (
              <Icon name="shopping-cart" size={25} color="#0079FF" />
            )}
            badgeText="0"
            onPress={() => this.setState({ selectedTab: 'shopcar' })}>
            <ShopCar />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'me'}
            title="我的"
            renderIcon={() => <Icon name="user" size={25} color="red" />}
            renderSelectedIcon={() => (
              <Icon name="user-o" size={25} color="#0079FF" />
            )}
            onPress={() => this.setState({ selectedTab: 'me' })}>
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
