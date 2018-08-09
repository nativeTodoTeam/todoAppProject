import React, { Component } from 'react';
import { Text, View, DatePickerIOS, StyleSheet, Button, DatePickerAndroid} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      test: '',
    };
  }

  
  

  render() {
    return (
      <View style = {styles.root}>
        <Button
          title = '点击弹出基本日期选择器'
          color="#a5a5a5"
          onPress={this.openDataPicker.bind(this)}
          />
        <Text>{this.state.test}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});