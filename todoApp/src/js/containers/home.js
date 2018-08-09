import React, { Component } from 'react';
import {
  TabNavigator
} from 'react-navigation';

import { Image, Platform, StyleSheet } from 'react-native';

import Group from './group';
import Index from './index';
import Add from './add';
import { scaleSize } from '../components/common';


export default TabNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: {
        tabBarLabel: '我的TODO',
        tabBarIcon: ({ focused }) => {
          let icon;
          if (focused) {
            icon = <Image source = {require('../../assets/images/barrage1.png')} style = {styles.image1}/>
          } else {
            icon = <Image source = {require('../../assets/images/barrage.png')} style = {styles.image1}/>
          }
          return icon;
        }, 
      }
    },
    Add: {
      screen: Add,
      navigationOptions: {
        title: '',
        tabBarIcon: ({ focused }) => {
          let icon;
          icon = <Image source = {require('../../assets/images/+.png')} style = {styles.image2}/>
          return icon;
        },
      },
    },
    Group: {
      screen: Group,
      navigationOptions: {
        tabBarLabel: '团队成员',
        tabBarIcon: ({ focused }) => {
          let icon;
          if (focused) {
            icon = <Image source = {require('../../assets/images/group1.png')} style = {styles.image1}/>
          } else {
            icon = <Image source = {require('../../assets/images/group.png')} style = {styles.image1}/>
          }
          return icon;
        },
      }
    },
  },
  {
    initialRouteName: 'Index',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#09b1b0',
      inactiveTintColor: '#828491',
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      showLabel: true, // android 是否展现文字 默认 true 
      upperCaseLabel : false, //android 文字是否需要大写 默认true 
      pressColor : '#ffffff', // android 按压时显示的颜色 
      scrollEnabled : false,
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      }, 
      style: {
        backgroundColor: '#ffffff', // TabBar 背景色
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        height: 60,
      },
      labelStyle: {
        fontSize: 9, // 文字大小
        paddingTop:0,
        marginTop: 2,
        // marginBottom: 6,
      },
      tabStyle:{
        // marginTop: 6,
      },
    },
  }
);

const styles = StyleSheet.create({
  image1: {
    width: 26,
    height: 22,
  },
  image3: {
    width: 26,
    height: 24,
  },
  image2: {
    width: 52,
    height: 52,
    ...Platform.select({
      ios: {
        marginTop: 18,
      },
      android: {
        marginTop: -4,
      },
    })
  }
});
