import React, { Component } from 'react';
import { Text, View, DatePickerIOS, StyleSheet, Button, DatePickerAndroid, Picker, PickerIOS, ImagePickerIOS } from 'react-native';

import { setSpText, scaleSize } from '../components/common';

var CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
             'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      test: '',
      language: 'chinese',
      carMake: 'cadillac',
      image: '',
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };
  }

  onDateChange(date) {
    this.setState({date: date});
  }

  async openDataPicker(){
    try{
        var newState = {};
        const {action,year,month,day} = await DatePickerAndroid.open({
          // 要设置默认值为今天的话，使用`new Date()`即可。
          // 下面显示的会是2020年5月25日。月份是从0开始算的。
          date: new Date(2020, 4, 25)
        });
        if(action !== DatePickerAndroid.dismissedAction){
          this.setState({
            test: year
          });
        }
        
    }catch({code,message}){
        console.warn("Error in example '${stateKey}': ",message)
    }
  }

  componentDidMount() {

    // this.pickImage();

  }

  pickImage() {

    ImagePickerIOS.canRecordVideos(() => alert('能获取视频'))

    

    ImagePickerIOS.canUseCamera(() => alert('能获取图片'))

     // openSelectDialog(config, successCallback, errorCallback);

    ImagePickerIOS.openSelectDialog({}, (data) => {
      console.log(data);
      // this.setState({ image: imageUri });

    }, error => console.log('123'));

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
        <Button
          title = '点击弹出基本日期选择器'
          color="#a5a5a5"
          onPress={this.openDataPicker.bind(this)}
          />
        <Text>{this.state.test}</Text>
        
        {/* <PickerIOS
          selectedValue={this.state.carMake}
          onValueChange={(carMake) => this.setState({carMake, modelIndex: 0})}>
          {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
            <PickerIOS.Item
              key={carMake}
              value={carMake}
              label={CAR_MAKES_AND_MODELS[carMake].name}
            />
          ))}
        </PickerIOS> */}
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Button
          title = '点击弹出选择'
          color="#a5a5a5"
          onPress={this.pickImage.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#ffffff',
  },
});