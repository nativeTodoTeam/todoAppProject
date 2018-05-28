import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

import { scaleSize } from '../components/common';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    fetch('http://wmtodolist.com/todo/get.json?tid=' + this.props.navigation.state.params.id)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.code == 1) {
          this.setState({
            text: responseJson.info.content
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _buttonClick() {
    if (this.state.text == '') {
      alert('请输入内容');
    } else {
      fetch('http://wmtodolist.com/todo/add.json?content=' + this.state.text)
      .then((response) => {
        console.log(response)
        if (response.ok) {
          const { navigate } = this.props.navigation;
          navigate('Index')
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
        <View style = {styles.buttonView}>
          <TouchableHighlight onPress = {() => this._buttonClick()}>
            <View style = {styles.button}>
              <Text style = {styles.buttonText}>保存</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    backgroundColor: '#09b1b0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(8),
  },
  buttonText: {
    fontSize: scaleSize(32),
    color: '#fff',
  },
});