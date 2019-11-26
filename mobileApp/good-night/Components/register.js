import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, Button, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

class Editer extends Component {
  render() {
      return (
          <View style={{flex: 1, height: 46.5, marginTop: 17.5, flexDirection: 'column', width: 315}}>
              <Text style={{marginBottom: 9.5, fontFamily: 'NanumSquare', fontSize: 15, margin:2}}>{this.props.name}</Text>
              <TextInput style={styles.input} placeholder={this.props.some} editable={true} maxLength={40}/>
          </View>

      )
  }
}

class Editer2 extends Component {
  render() {
      return (
          <View style={{flex: 1, height: 46.5, marginTop: 17.5, flexDirection: 'column', width: 141}}>
              <Text style={{marginBottom: 9.5, fontFamily: 'NanumSquare', fontSize: 15, margin:2}}>{this.props.name}</Text>
              <TextInput style={styles.input1} placeholder={this.props.some} editable={true} maxLength={40}/>
          </View>

      )
  }
}

export default class Register extends React.Component{
  constructor(props){
    super(props);

    this.state = {isReady: false};
  }

  async componentDidMount() {
    await Font.loadAsync({'NanumSquare': require('../assets/fonts/NanumSquareR.ttf'),});
    this.setState({ isReady: true});
  }


    render(){
      const { navigation } = this.props;
      if(this.state.isReady)
      {
        return(
            <View style={styles.container}>
                <View style={{height: 42, flexDirection: 'row', justifyContent: 'flex-end'}}> 
                  <View style={{flex:1, height: 22, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={require('../images/left_arrow.png')} style={{height: 20, width: 20}}></Image>
                    <Text style={{fontSize: 20, fontFamily: 'NanumSquare'}}>회원가입</Text>
                    <View style={{height: 20, width: 20, backgroundColor: 'white'}}></View>
                  </View> 
                </View>
                <Editer name = "아이디" some = "필수 입력"></Editer>
                <Editer name = "비밀번호" some = "필수 입력"></Editer>
                <Editer name = "비밀번호 확인" some = "필수 입력"></Editer>
                <Editer name = "이메일" some = "필수 입력"></Editer>
                <Editer name = "이름" some = "필수 입력"></Editer>
                <View style={{flex:1, flexDirection:'row'}}> 
                  <Editer2 name = "성별" some = "여성 / 남성"></Editer2>
                  <View style={{width:33}}/> 
                  <Editer2 name = "나이" some = "숫자만 입력"></Editer2>
                </View>
                <Editer name = "휴대폰번호" some = "-빼고 입력"></Editer>
                <View style={{height: 30.5}}/>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("MainScreen");
                }} style={{backgroundColor: '#003cff', width: 236, height: 33, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontFamily: 'NanumSquare', fontSize: 20}}>가입완료</Text>
                </TouchableOpacity>
            </View>
        )
      }
      else{
        return <View><Text> Loading.. </Text></View>;
      }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      fontFamily: 'NanumSquare',
      fontSize: 15,
      height: 22,
      width: 236,
      borderBottomWidth: 5,
      borderColor: '#707070',
      paddingBottom: 5,
    },
    input1: {
      fontFamily: 'NanumSquare',
      fontSize: 15,
      height: 22,
      width: 141,
      borderBottomWidth: 5,
      borderColor: '#707070',
      paddingBottom: 5,
    }
  });