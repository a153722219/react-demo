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
            <Text>login</Text>
            <Button 
              title="login"
              onPress={()=>this.props.navigation.navigate('App')}
            />
      </View>
    );
  }
}

