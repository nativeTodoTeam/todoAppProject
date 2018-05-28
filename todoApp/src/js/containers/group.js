import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

import { scaleSize } from '../components/common';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log('group')
    fetch('http://wmtodolist.com/chat/userlist.json?name=&pinyin=')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.code == 1) {
          this.setState({
            data: responseJson.list
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView style = {styles.root}>
        {
          this.state.data.map((item, index) => {
            return <View
              style = {styles.view}
              key = { index }>
              <Image
                // source = {item.header_img_url&& item.header_img_url != '' ? item.header_img_url : require('../../assets/images/user.avatar.png')}
                source = {require('../../assets/images/user.avatar.png')}
                style = {styles.image}/>
              <View style={styles.textView}>
                <Text style = {[styles.text, styles.text1]}>{item.name}</Text>
                <Text style = {styles.text}>{item.groups ? item.groups : ''}</Text>
              </View>
            </View>
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  view: {
    height: scaleSize(108),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  },
  image: {
    width: scaleSize(80),
    height: scaleSize(80),
    borderWidth: 1,
    borderColor: 'green',
    marginRight: scaleSize(40),
    marginLeft: scaleSize(40),
  },
  textView: {
    width: scaleSize(400),
    height: scaleSize(108),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: scaleSize(24),
    color: '#333',
  },
  text1: {
    fontSize: scaleSize(32),
    marginBottom: scaleSize(10),
  }
});