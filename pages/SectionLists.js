/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
const CITYS = [
  {
  title:"一线",
  data:["安徽","合肥","长丰","肥西","肥东","黄山","祁门","黟县","歙县"]
},
{
  title:"二线",
  data:["安徽33","合肥22"]
}
];


export default class SectionLists extends Component {
constructor(props){
  super(props);
  this.state={
      isLoading:false,
      dataArray:CITYS
  }
}

  _renderItem(data){ //渲染item
    return <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
    </View>
  } 
  loadData(refreshing){
    if(refreshing){
      this.setState({isLoading:true});
    }
    setTimeout(()=>{
        let dataArray = [];
        if(refreshing){ //如果是下拉 将数组倒叙
          for(let i = this.state.dataArray.length-1;i>=0;i--){
            dataArray.push(this.state.dataArray[i]);
          }
        }else{ //下拉加载就concat
          dataArray = this.state.dataArray.concat(CITYS);
        }

       
        this.setState({
          dataArray:dataArray,
          isLoading:false
        })
      },2000);
  }
  
  getIndicator(){
    //生成底部组件
      return <View style={styles.indicatorContainer}>
          <ActivityIndicator
            size={'large'}
            animating={true}
            color={'red'}
            style={styles.indicator}
          />
          <Text>正在加载</Text>
      </View>
  }


  render() {
    return (
      <View style={styles.container}>
           <SectionList
            //这里不是data 是sections
              sections={this.state.dataArray}
              renderSectionHeader={(data)=>{
                  const {section} = data;
                  return <View style={styles.sectionHeader}>
                    <Text style={styles.text}>{section.title}</Text>
                  </View>
              }}
              //分割线
              ItemSeparatorComponent={()=><View style={styles.line}>

              </View>}

              //自带下拉刷新
              renderItem={(data)=>this._renderItem(data)}
              // refreshing={this.state.isLoading}
              // onRefresh={()=>{
              //       this.loadData();
              // }}
              //自定义下拉刷新组件

              refreshControl={
                  <RefreshControl
                      title={'loading'}
                      colors={['red']} //android 颜色
                      tintColor={'orange'} //IOS颜色
                      titleColor={'orange'}
                      refreshing={this.state.isLoading}
                      onRefresh={()=>{
                            this.loadData(true);
                      }}
                  />
              }
              //列表底部组件
              ListFooterComponent={
                ()=>{
                  return this.getIndicator()
                }
              }
              //触底事件
              onEndReached={
                ()=>this.loadData()
              }

           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'#F5FCFF'
  },
  item:{
    backgroundColor:'#169',
    height:200,
    // marginRight:15,
    // marginLeft:15,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'center'
  },
  line:{
    height:2,
    flex:1,
    backgroundColor:'red'
  },
  text:{
    color:'white',
    fontSize:20
  },
  indicatorContainer:{
    alignItems:'center'
  },
  indicator:{
      color:"red",
      margin:10
  },
  sectionHeader:{
    height:50,
    backgroundColor:"#93ebbe",
    alignItems:"center",
    justifyContent:"center"
  }
});
