import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class BluetoothTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return (<Image style={{height:24, width:24}} source={require('../../images/blueetooth_logo.png')}></Image>);
        }
    }
    render() {
        return (
            <View style={style.container}>
                <View style={{height: 42, flexDirection: 'row',}}> 
                  <View style={{flex:1, height: 22, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={require('../../images/left_arrow.png')} style={{height: 20, width: 20, marginTop:15}}></Image>
                    <Image source={require('../../images/logo.png')} style={{height: 48, width: 86}}></Image>
                    <TouchableOpacity style={{height: 20, width: 20, marginTop: 15}}>
                        <Image source={require('../../images/menu.png')} style={{height: 20, width: 20}}></Image>
                    </TouchableOpacity>
                    
                  </View> 
                </View>
                <View style={{flex:1, flexDirection:'row', height: 528, width: 360, alignItems:"center", justifyContent: "center"}}>
                    <Text style = {{fontFamily: 'NanumSquare', fontSize: 18}}>심{"\n"}박{"\n"}수</Text>
                    <View style={{alignItems:"center", justifyContent:"space-around", flex:1,height: 438, flexDirection:'column'}}>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>5{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>4{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>3{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>2{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>1{"\n"}단{"\n"}계</Text>
                    </View>
                    <View style={style.col}>
                        <Text style={style.alig}>1.5</Text>
                    </View>
                    <View style={style.col}>
                        <Text style={style.alig}>3.0</Text>
                    </View>
                    <View style={style.col}>
                        <Text style={style.alig}>4.5</Text>
                    </View>
                    <View style={style.col}>
                        <Text style={style.alig}>6.0</Text>
                    </View>
                    <View style={style.col}>
                        <Text style={style.alig}>7.5</Text>
                    </View>
                    <View style={style.col}>
                        <Text style={style.alig}>9.0</Text>
                    </View>
                    <View style={style.col}>
                    </View>
                </View>
            
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});