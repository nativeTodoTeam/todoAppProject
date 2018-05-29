import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, DeviceEventEmitter } from 'react-native';

import { scaleSize } from '../components/common';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  _buttonClick() {
    if (this.state.text == '') {
      return false;
    } else {
      fetch('http://wmtodolist.com/todo/add.json', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: this.state.text,
        })
      })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          const { navigate } = this.props.navigation;
          DeviceEventEmitter.emit('Add', '刷新');
          navigate('Index');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }    
  }

  render() {
    
    return (
      <View style = {styles.root}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value = {this.state.text}
            placeholder = '请输入内容'
            placeholderTextColor = '#999999'
            underlineColorAndroid = 'transparent'
            onChangeText = {(text) => this.setState({text})}
          />
        </View>
        <TouchableHighlight
          underlayColor = '#fff'
          onPress = {() => this._buttonClick()}>
          <View style = {[styles.button, {
            backgroundColor: this.state.text == '' ? '#f5f5f5' : '#09b1b0',
          }]}>
            <Text style = {[styles.buttonText, {
              color: this.state.text == '' ? '#333' : '#fff'
            }]}>保存</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputView: {
    marginTop: scaleSize(160),
    marginBottom: scaleSize(30),
    alignItems: 'center',
  },
  input: {
    width: scaleSize(600),
    height: scaleSize(70),
    padding: 0,
    paddingLeft: scaleSize(6),
    paddingRight: scaleSize(6),
    borderBottomColor: '#09b1b0',
    borderBottomWidth: 1,
    color: '#333333',
    fontSize: scaleSize(30)
  },
  buttonView: {
    alignItems: 'center',
  },
  button: {
    marginTop: scaleSize(100),
    width: scaleSize(600),
    height: scaleSize(88),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(8),
  },
  buttonText: {
    fontSize: scaleSize(32),
  },
});