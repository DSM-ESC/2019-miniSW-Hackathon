import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, Button, TouchableOpacity } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Graphie from './appNavigator/Graphie'
import Nofication from './appNavigator/Nofication'
import BluetoothTab from './appNavigator/BluetoothTab'

const AppTabNavigator = createBottomTabNavigator({
   Graphie: {screen: Graphie},
   Nofication: {screen: Nofication},
   BluetoothTab: {screen: BluetoothTab}, 
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  render() {
    return <AppTabContainet/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});