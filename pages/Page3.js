/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class Page3 extends Component {

  render() {
    const {navigation} = this.props;
    const {state,setParams} = navigation;
    const {params}=state;
    const showText = params&& params.mode=='edit'?'正在编辑':"编辑完成";
    return (
      <View>
            <Text>{showText}</Text>
            <TextInput 
              style={styles.input}
              onChangeText={text=>{
                  console.log(text);
                  setParams({title:text})
              }}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input:{
        height:50,
        borderWidth:1,
        marginTop:10,
        borderColor:"#000000"
    }

});

