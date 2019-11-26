import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, Button, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';


export default class Login extends React.Component {
  _onPressButton()
  {
    Alert.alert('You Tapped Button!');
  }

  constructor(props){
    super(props);

    this.state = {isReady: false};
  }

  async componentDidMount() {
    await Font.loadAsync({'NanumSquare': require('../assets/fonts/NanumSquareR.ttf'),});
    this.setState({ isReady: true});
  }
  

  render() {
    const { navigation } = this.props;
    if(this.state.isReady){
      return (
        <View style={styles.container}>
          <View style={{ height: 199, alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end'}}>
            <Image source={require('../images/logo.png')} style={{height: 113}}></Image>
          </View>
          <View style= {{ height: 240, alignItems: 'center', flexDirection: 'column', }}>
            <View style={{ height: 50}}></View>
            <TextInput style={styles.input} placeholder='ID' editable={true} maxLength={40}/>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='PW' editable={true} maxLength={40}/>
            <View style={{flex: 1, flexDirection:'row-reverse', width: 240}}>
              <TouchableOpacity onPress = {this._onPressButton} style={{height:15, width: 113, flex:1, flexDirection: 'row-reverse'}}>
                <Text style={{ color: '#707070'}}>아이디 찾기 | 비밀번호 찾기</Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 36}}/>
            
            <TouchableOpacity onPress = {() => {
                    navigation.navigate("MainScreen");
                }} style={{width: 236, height: 33, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}>
                <Text style={{margin: 2, fontSize: 20, fontFamily: 'NanumSquare', color: 'white'}}>로그인</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 201, alignItems: 'center', flexDirection: 'column-reverse'}}>
            <View style={{height: 23, flexDirection:'row'}}>
              <Text style={{fontFamily: 'NanumSquare', color: '#707070'}}>만약 계정이 없으신가요?> 처음이시면</Text>
              <View style={{width:3}}/>
              <TouchableOpacity onPress={() => {
                    navigation.navigate("second");
                }}>
                <Text style={{color: 'red'}}>회원가입</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      );
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
    flexDirection: 'column'
  },
  input: {
    fontFamily: 'NanumSquare',
    fontSize: 20,
    margin: 10,
    width: 236,
    borderWidth: 1,
    borderColor: '#707070',
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 3,
  }
});
