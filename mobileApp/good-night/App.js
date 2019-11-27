import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, Button, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import Login from './Components/login';
import Register from './Components/register';
import MainScreen from './Components/MainScreen';
import Alldata from './Components/Alldata';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'

const AppStackNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    second: { screen: Register},
    MainScreen: {screen: MainScreen},
  },
  { initialRouteName: 'Login', headerMode: "none"}
);

export default createAppContainer(AppStackNavigator);
