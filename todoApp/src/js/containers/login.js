import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

import { setSpText, scaleSize } from '../components/common';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pw: ''
    };
  }

  _buttonClick() {
    // const { navigate } = this.props.navigation;
    //     navigate('Index', { name: 'Jane' })

    fetch('http://wmtodolist.com/user/logon.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.text,
        password: this.state.pw,
      })
    })
    .then((response) => {
      console.log(response)
      // 接口完好时, 不需要注释, 主要功能判断登陆是否成功
      // if (response.ok) {
        const { navigate } = this.props.navigation;
        navigate('Index', { name: 'Jane' })
      // }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <View style = {styles.root}>
        <View style = {styles.imageView}>
          <Image
            source = {require('../../assets/images/logo.png')}
            style = {styles.image}/>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value = {this.state.text}
            placeholder = '邮箱'
            placeholderTextColor = '#d5d5d5'
            underlineColorAndroid = 'transparent'
            onChangeText = {(text) => this.setState({text})}
          />
          <TextInput
            style={styles.input2}
            value = {this.state.pw}
            placeholder = '密码'
            placeholderTextColor = '#d5d5d5'
            underlineColorAndroid = 'transparent'
            onChangeText = {(pw) => this.setState({pw})}
          />
        </View>
        <TouchableHighlight onPress = {() => this._buttonClick()}>
          <View style = {styles.button}>
            <Text style = {styles.buttonText}>登入</Text>
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
  imageView: {
    alignItems: 'center',
    marginTop: scaleSize(220),
    marginBottom: scaleSize(140)
  },
  image: {
    width: scaleSize(400),
    height: scaleSize(82),
  },
  inputView: {
    marginBottom: scaleSize(60),
  },
  input: {
    width: scaleSize(600),
    height: scaleSize(88),
    padding: 0,
    paddingLeft: scaleSize(20),
    borderColor: '#d5d5d5',
    borderWidth: 1,
    color: '#555555',
    fontSize: scaleSize(32)
  },
  input2: {
    marginTop: scaleSize(24),
    width: scaleSize(600),
    height: scaleSize(88),
    padding: 0,
    paddingLeft: scaleSize(20),
    borderColor: '#d5d5d5',
    borderWidth: 1,
    color: '#555555',
    fontSize: scaleSize(32)
  },
  button: {
    width: scaleSize(600),
    height: scaleSize(88),
    backgroundColor: '#09b1b0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(8),
  },
  buttonText: {
    fontSize: scaleSize(32),
    color: '#fff',
  }
});