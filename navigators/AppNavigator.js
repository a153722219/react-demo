import {
    DrawerItems,
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation'
import HomePage from '../pages/HomePage';
import React from 'react';//使用Button需要引入React
import {Button,Platform,ScrollView,SafeAreaView} from 'react-native'
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import FlatLists from '../pages/FlatLists';
import SwipeableFlatLists from '../pages/SwipeableFlatLists';
import SectionLists from '../pages/SectionLists';
import LoginPage from '../pages/LoginPage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'




/**
 * 抽屉导航
 */
 const DrawerNav = createDrawerNavigator({
    Page4:{
        screen:Page4,
        navigationOptions:{
            drawerLabel:'Page4',
            drawerIcon:(tintColor=>(
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color:tintColor}}
                />
            ))
        }
    },
    Page1:{
        screen:Page1,
        navigationOptions:{
            drawerLabel:'Page1',
            drawerIcon:(tintColor=>(
                <MaterialIcons
                    name={'move-to-inbox'}
                    size={24}
                    style={{color:tintColor}}
                />
            ))
        }
    }
 },{
     initalRouteName:'Page4',
     contentOptions:{
         activeTintColor:'#e91e63'
     },
     contentComponent:(props=>
     <ScrollView style={{backgroundColor:'#789',flex:1}}>
        <SafeAreaView forceInset={{top:'always',horizontal:"never"}}>
                <DrawerItems {...props}/>
        </SafeAreaView>
     </ScrollView>)
 });


/**
 * 底部tab导航器
 * 
 */
const AppBottomNavigator = createBottomTabNavigator(
    {
        Page1:{
            screen:Page1,
            navigationOptions:{
                tabBarLabel:'最热',
                tabBarIcon:((tintColor,focused)=>{
                    return (
                        <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color:tintColor}}
                    />
                    )
                    
                })
            }
        },
        Page2:{
            screen:Page2,
            navigationOptions:{
                tabBarLabel:'趋势',
                tabBarIcon:((tintColor,focused)=>
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                        style={{color:tintColor}}
                    />
                )
            }
        },
        Page3:{
            screen:Page3,
            navigationOptions:{
                tabBarLabel:'收藏',
                tabBarIcon:((tintColor,focused)=>
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                        style={{color:tintColor}}
                    />
                )
            }
        },
        Page4:{
            screen:Page4,
            navigationOptions:{
                tabBarLabel:'BayMax',
                tabBarIcon:((tintColor,focused)=>
                    <Ionicons
                        name={'ios-aperture'}
                        size={26}
                        style={{color:tintColor}}
                    />
                )
            }
        }
    },{
        tabBarOptions:{
           activeTintColor:Platform.OS=='ios'?'#FF0000':'#FFFFFF',
           
    
        }
    }
);
/**
 * 顶部tab导航器
 * 
 */ 
const AppTopNavigator = createMaterialTopTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'IOS'
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'Android'
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'WeChat'
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions:{
            tabBarLabel:'React'
        }
    }
},{
    tabBarOptions:{
        tabStyle:{minWidth:50},
        upperCaseLabel:false,//标签大写
        scrollEnabled:true,//选项卡滚动
        style:{backgroundColor:"#678"},
        indicatorStyle:{//标签指示器样式
            height:2,
            backgroundColor:"white"
        },
        labelStyle:{ //文字样式
            fontSize:13,
            marginTop:6,
            marginBottom:6
        },

    }
});

const AppStackNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            title:`主页`,
            headerBackTitle:"返回哈"
            //headerBackTitle和headerTruncatedBackTitle不是在当前页面设置，而是在前一个页面设置！！！
        }
    },
    Page1:{
        screen:Page1,
        navigationOptions:(({navigation})=>{
            console.log(navigation)
            return { //动态设置标题
                title:`${navigation.state.params.name}`
            }
        })
    },
    Page2:{
        screen:Page2
    },
    Page3:{
        screen:Page3,
        navigationOptions:(props=>{
            const navigation = props.navigation;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title:params.title?params.title:'This is Page3',
                headerRight:( //使用Button需要引入React
                    <Button
                        title = {params.mode==='edit'?"保存":"编辑"}
                        onPress={()=>{
                            setParams({
                                mode:params.mode==='edit'?'':'edit'
                            });
                        }}
                    />
                    )
            }
        })
    },
    Page4:{
        screen:Page4,
        navigationOptions:{
            title:`Page4 -`
        }  
    },
    Bottom:{
        screen:AppBottomNavigator,
        navigationOptions:{
            title:"BottomNavigator"
        }
    },
    Top:{
        screen:AppTopNavigator,
        navigationOptions:{
            title:"TopNavigator"
        }
    },
    DrawerNav:{
        screen:DrawerNav,
        navigationOptions:{
            title:"Drawer"
        }
    },
    FlatLists:{
        screen:FlatLists,
        navigationOptions:{
            title:"FlatLists"
        }
    },
    SwipeableFlatLists:{
        screen:SwipeableFlatLists,
        navigationOptions:{
            title:"SwipeableFlatList"
        }
    },
    SectionLists:{
        screen:SectionLists,
        navigationOptions:{
            title:"SectionLists"
        }
    }
});

const AuthStack = createStackNavigator({
    Login:{
        screen:LoginPage
    }
},{
    navigationOptions:{

    }
})

export default createSwitchNavigator(
    {
        Auth:AuthStack,
        App:AppStackNavigator
    },
    {
        initialRouteName:'Auth'
    }
);