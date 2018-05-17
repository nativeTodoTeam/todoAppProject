import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Test2 extends Component {
  static navigationOptions = {
    title: 'test2',
  };
  render() {
    return (
      <Text>Hello world test!</Text>
    );
  }
}