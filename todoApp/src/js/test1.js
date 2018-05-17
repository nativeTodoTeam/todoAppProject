import React, { Component } from 'react';
import { Button, View, Image, StyleSheet, } from 'react-native';

export default class Test1 extends Component {
  static navigationOptions = {
    title: 'test1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
            source={require('../images/logo.png')}
            style = {styles.image}/>
        <Button
          title="Go to TEST2"
          onPress={ () =>
            navigate('Test2', { name: 'Jane' })
          }
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  }
});