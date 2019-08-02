/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
const CITYS = ["安徽","合肥","长丰","肥西","肥东","黄山","祁门","黟县","歙县","休宁","屯溪","九华山","芜湖","繁昌","南陵","芜湖县","蚌埠","怀远","固镇","五河","淮南","凤台","马鞍山","当涂","淮北","肖县","铜陵","安庆","岳西","桐城","太湖","潜山","怀宁","宿松","望江","枞阳","滁州","凤阳","定远","全椒","来安","天长","阜阳","临泉","界首","阜南","颍上","太和","宿县","宿州","泗县","砀山","灵璧","巢湖","庐江","无为","含山","和县","亳州","涡阳","利辛","蒙城","池州","东至","贵池","石台","青阳","宣城","泾县","旌德","宁国","绩溪","广德","六安","金寨","舒城","寿县","霍山","滁县"];


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
           <FlatList
              data={this.state.dataArray}
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
    marginRight:15,
    marginLeft:15,
    marginBottom:15,
    alignItems:'center',
    justifyContent:'center'
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
  }
});
