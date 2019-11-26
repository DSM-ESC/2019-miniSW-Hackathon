import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Nofication extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return (<Image style={{height:24, width:24}} source={require('../../images/notification.png')}></Image>);
        }
    }
    render() {
        return (
            <View style={style.container}>
                <Text>Nofication</Text>
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