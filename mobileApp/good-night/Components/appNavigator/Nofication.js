import React, { Component } from 'react';
import {LineChart, Grid, XAxis} from 'react-native-svg-charts'
import { View, Text, StyleSheet, Image,TouchableOpacity, DatePickerIOS, Button, Picker, Alert } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown'
import * as Font from 'expo-font';
import { ThemeColors } from 'react-navigation';


export default class Nofication extends Component {
    _onPressButton()
  {
    Alert.alert('내일 오전 5시 41분에 개운한 기상모드로 기상 설정 되었습니다!');
  }
  _onPressButton2()
  {
    Alert.alert('내일 오전 7시 00분에 일어나기 위해서 10:00PM / 11:30PM / 1:00AM / 2:30AM에 취침 하여야합니다!');
  }
    constructor(props) {
        super(props);
        this.state = {chosenDate: new Date()};
    
        this.setDate = this.setDate.bind(this);
      }
    
      setDate(newDate) {
        this.setState({chosenDate: newDate});
      }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return (<Image style={{height:24, width:24}} source={require('../../images/notification.png')}></Image>);
        }
    }

    async componentDidMount() {
        await Font.loadAsync({'NanumSquare': require('../../assets/fonts/NanumSquareR.ttf'),});
        this.setState({ isReady: true});
    }

    

    render() {
        return (
            <View style={style.container}>
                <View style={{height: 21}}/>
                <View style={{height: 42, flexDirection: 'row', alignItems: "center"}}> 
                  <View style={{flex:1, height: 22, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={require('../../images/left_arrow.png')} style={{height: 20, width: 20, marginTop:15}}></Image>
                    <Image source={require('../../images/logo.png')} style={{height: 48, width: 86}}></Image>
                    <TouchableOpacity style={{height: 20, width: 20, marginTop: 15}}>
                        <Image source={require('../../images/menu.png')} style={{height: 20, width: 20}}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style = {{height: 82, alignItems: "center", justifyContent:'flex-end', flexDirection:'column'}}>
                    <Text style={{fontFamily: 'NanumSquare', fontSize: 24}}>모드 설정</Text>
                </View> 
                
                <View>    
                    <DatePickerIOS
                    mode={"time"}
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <Button title='수면시간 설정' onPress={this._onPressButton2}></Button>
                        <Button title='기상시간 설정' onPress={this._onPressButton}></Button>
                    </View>
                    <View style={{height: 180}}>
                        <Picker
                        selectedValue={this.state.language}
                        style={{height: 50, width: 360}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="개운한 기상 모드" value="java" />
                        <Picker.Item label="낮잠 모드" value="js" />
                        </Picker>
                    </View>
                </View>
                
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
    }
});