import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableHighlight, ListView , TouchableOpacity,} from 'react-native';

import { scaleSize } from '../components/common';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listViewData: [1,2,3]
    };
  }

  render() {
    return (
      <SwipeRow
        disableRightSwipe = {true} 
        leftOpenValue = {75}
        rightOpenValue = {-scaleSize(160)}>
        <View style = {styles.rowBack}>
          <Text>Left</Text>
          <TouchableOpacity
            style = {styles.leftView}
            onPress = {() => this.props.finishClick(this.props.data.id)}>
            <Text
              style={styles.backTextWhite}>
              {this.props.data.status == '1' ? '标为完成' : '标为未完'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          onPress = {() => this.props.detailClick(this.props.data.id)}>
          <View style = {{
            alignItems: 'center',
            backgroundColor: '#ffffff',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            width: scaleSize(750),
            justifyContent: 'flex-start',
            height: scaleSize(108),
            borderBottomWidth: 1,
            borderBottomColor: '#cccccc',
          }}>
            {
              this.props.data.status == '4' 
              ? <Image
              source = {require('../../assets/images/finish.png')}
              style = {styles.image}/>
              : <Image
              source = {require('../../assets/images/unfinish.png')}
              style = {styles.image}/>
            }
            <Text style = {styles.text}>{this.props.data.content}</Text>
          </View>
        </TouchableHighlight>
      </SwipeRow>     
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: scaleSize(56),
    height: scaleSize(57),
    marginLeft: scaleSize(29),
    marginRight: scaleSize(26),
  },
	backTextWhite: {
    color: '#FFF',
    fontSize: scaleSize(30),
    textAlign: 'center'
	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
  },
  leftView: {
    width: scaleSize(160),
    alignItems: 'center',
    backgroundColor: 'green',
    height: scaleSize(108),
    justifyContent: 'center',
  }
});