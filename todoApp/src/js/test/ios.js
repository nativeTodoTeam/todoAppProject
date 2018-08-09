import React, { Component } from 'react';
import { Text, View, DatePickerIOS, StyleSheet} from 'react-native';

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
      <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange.bind(this)}
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