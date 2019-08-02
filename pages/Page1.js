/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class Page1 extends Component {
  render() {

    return (
      <View>
            <Text>Page1</Text>
            <Button 
              title="goback"
              onPress={()=>this.props.navigation.goBack()}
            />
      </View>
    );
  }
}

