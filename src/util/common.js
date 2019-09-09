import { Dimensions } from 'react-native';

//获取屏幕大小
// eslint-disable-next-line no-unused-vars
const { width, height } = Dimensions.get('window');
const ScreenWidth = Math.min(width, 540); //判断是否是 iphone Plus

//db数值转化
export function getPixel(num, designWidth = 375) {
  return (num * ScreenWidth) / designWidth;
}
