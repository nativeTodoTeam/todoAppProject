import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, DeviceEventEmitter } from 'react-native';

import { scaleSize } from '../components/common';
import List from '../components/list';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfinishData: [],   
      finishData: [],
    };
  }

  componentDidMount() {
    console.log('index')
    this.getData();
    DeviceEventEmitter.addListener('Add', (value)=>{
      console.log(value);
      this.setState({
        finishData: [],
        finishList: []
      })
      this.getData();
    });
  }

  getData() {
    // this.setState({
    //   unfinishData: [{
    //     id: 1,
    //     status: 1,
    //     content: '1231'
    //   },
    //   {
    //     id: 2,
    //     status: 1,
    //     content: '1232'
    //   },
    //   {
    //     id: 3,
    //     status: 1,
    //     content: '1233'
    //   },
    //   {
    //     id: 4,
    //     status: 1,
    //     content: '1234'
    //   }],
    //   finishData:[{
    //     id: 5,
    //     status: 4,
    //     content: '1235'
    //   },
    //   {
    //     id: 6,
    //     status: 4,
    //     content: '1236'
    //   },
    //   {
    //     id: 7,
    //     status: 4,
    //     content: '1237'
    //   },
    //   {
    //     id: 8,
    //     status: 4,
    //     content: '1238'
    //   }]
    // })
    fetch('http://wmtodolist.com/todo/list.json?status=1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.code == 1) {
          this.setState({
            unfinishData: responseJson.list
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });

    fetch('http://wmtodolist.com/todo/list.json?status=4')
      .then((response2) => response2.json())
      .then((responseJson2) => {
        console.log(responseJson2);
        if (responseJson2.code == 1) {  
          let finishData = responseJson2.list;
          this.setState({
            finishData:responseJson2.list
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  finishClick(id) {
    console.log('finishClick');
    console.log(id);
    fetch('http://wmtodolist.com/todo/mark.json?id=' + id + '&isFinish=4')
    .then((response) => {
      console.log(response)
      if (response.ok) {
        let unfinishData = this.state.unfinishData;
        let finishData = this.state.finishData;
        for (let i = 0; i < unfinishData.length; i++) {
          if (unfinishData[i].id == id) {
            let item = unfinishData.splice(i, 1);
            item[0].status = 4;
            finishData.splice(0, 0, item[0]);
            this.setState({
              finishData: finishData,
              unfinishData: unfinishData
            });
            return;
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  unfinishClick(id) {
    console.log('unfinishClick');
    console.log(id);
    let data = this.state.finishList;
    fetch('http://wmtodolist.com/todo/mark.json?id=' + id + '&isFinish=1')
    .then((response) => {
      console.log(response)
      if (response.ok) {
        let unfinishData = this.state.unfinishData;
        let finishData = this.state.finishData;
        for (let i = 0; i < finishData.length; i++) {
          if (finishData[i].id == id) {
            let item = finishData.splice(i, 1);
            item[0].status = 1;
            unfinishData.splice(0, 0, item[0]);
            this.setState({
              finishData: finishData,
              unfinishData: unfinishData
            });
            return;
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  detailClick(id) {
    console.log('detailClick');
    console.log(id);
    const { navigate } = this.props.navigation;
    navigate('Edit', {id: id});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.root}>
        <ScrollView style = {styles.root}>
          <View style = {styles.titleView}>
            <Text style = {styles.titleText}>未完成TODO</Text>
          </View>
          {
            this.state.unfinishData.map((item, index) => {
              return <View
                key = {index}
                style = {styles.list}>
                <List
                  data = {item}
                  detailClick = {(id) => this.detailClick(id)}
                  finishClick = {(id) => this.finishClick(id)}/>
              </View>
            })
          }
          <View style = {styles.titleView}>
            <Text style = {styles.titleText}>已完成TODO</Text>
          </View>
          {
            this.state.finishData.map((item, index) => {
              return <View
                key = {index}
                style = {styles.list}>
                <List
                  data = {item}
                  detailClick = {(id) => this.detailClick(id)}
                  finishClick = {(id) => this.unfinishClick(id)}/>
              </View>
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  titleView: {
    height: scaleSize(80),
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },
  titleText: {
    fontSize: scaleSize(30),
    flex: 1,
    flexDirection: 'row',
    color: '#999999',
    marginLeft: scaleSize(37),
  }
});