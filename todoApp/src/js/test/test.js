import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Circle from './Circle';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onDateChange(date) {
    this.setState({date: date});
  }

  render() {
    return (
      <View style = {styles.root}>
        <Text>测试</Text>
        <View/>
        <Circle
  style={{width: 100, height: 100}}
  color={"#111111"}
  radius={50}
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});