import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default class Alldata extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={{height: 42, flexDirection: 'row',}}> 
                  <View style={{flex:1, height: 22, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={require('../images/left_arrow.png')} style={{height: 20, width: 20, marginTop:15}}></Image>
                    <Image source={require('../images/logo.png')} style={{height: 48, width: 86}}></Image>
                    <TouchableOpacity style={{height: 20, width: 20, marginTop: 15}}>
                        <Image source={require('../images/menu.png')} style={{height: 20, width: 20}}></Image>
                    </TouchableOpacity>
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