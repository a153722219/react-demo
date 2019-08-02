/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

export default class Page2 extends Component {
  static navigationOptions = {
    title:"static 设置的标题"
     //设置返回按钮的文本 有长度限制
    
  };
  render() {
    return (
      <View>
            <Text>Page2</Text>
      </View>
    );
  }
}

