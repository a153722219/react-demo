/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Button,
  Text,
  View
} from 'react-native';

export default class Page4 extends Component {
  render() {
    const {navigation} =this.props;
    return (
      <View>
            <Text>Page4</Text>
            <Button title={'open drawer'} onPress={()=>{
                navigation.openDrawer();
            }}/>
             <Button title={'toggle drawer'} onPress={()=>{
                navigation.toggleDrawer();
            }}/>
      </View>
    );
  }
}

