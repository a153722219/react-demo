/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RootSiblings from 'react-native-root-siblings';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


var id = 0;
var elements = [];

export default class HomePage extends Component {
  addSibling = () => {
    let sibling = new RootSiblings(<View
    >
        <Text>I`m No.{id}</Text>
    </View>);
    id++;
    elements.push(sibling);
};


  render() {
    const navigation = this.props.navigation;
    return (
      <View>
            <Text>HomePage</Text>
          <Button title="go page1" onPress={()=>{
              navigation.navigate('Page1',{name:"动态的Page1"});
          }}/>

          <Button title="go page4" onPress={()=>{
            
              navigation.navigate('Page4');
              console.log(12312313);
          }}/>
          <Button title="go page3" onPress={()=>{
            navigation.navigate('Page3',{name:'devio'});
        }}/>

       <Button title="go page2" onPress={()=>{
            navigation.navigate('Page2');
        }}/>

        <Button title="go Top" onPress={()=>{
            navigation.navigate('Top');
        }}/>

        <Button title="go Bottom" onPress={()=>{
            navigation.navigate('Bottom');
        }}/>

        <Button title="go Drawer" onPress={()=>{
            navigation.navigate('DrawerNav');
        }}/>

        <Button title="go FlatList" onPress={()=>{
            navigation.navigate('FlatLists');
        }}/>
         <Button title="go SwipeableFlatList" onPress={()=>{
            navigation.navigate('SwipeableFlatLists');
        }}/>
          <Button title="go SectionLists" onPress={()=>{
            navigation.navigate('SectionLists');
        }}/>

        <Button title="添加根组件" onPress={ this.addSibling }/>
      </View>
    );
  }
}


