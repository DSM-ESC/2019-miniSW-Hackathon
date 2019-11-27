import React, { Component } from 'react';
import {LineChart, Grid, XAxis} from 'react-native-svg-charts'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default class Graphie extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return (<Image style={{height:24, width:24}} source={require('../../images/graph.png')}></Image>);
        }
    }

    async componentDidMount() {
        await Font.loadAsync({'NanumSquare': require('../../assets/fonts/NanumSquareR.ttf'),});
        this.setState({ isReady: true});
      }

    render() {
        const data = [ 101,105,109,99, 97, 94, 90, 89, 89, 85, 87, 85, 80, 82, 80, 81, 79, 79, 79, 79, 
            97, 94, 90, 89,  101,105,104,104,  80, 82, 80, 81, 77, 77, 77, 77,  79, 82, 85, 87, 88, 89, 88, 90, 91 ,90, 94, 92 ,97, 94, 90, 89, 101, 109, 105, 103 
        ]
        return (
            <View style={style.container}>
                <View style={{height: 21}}/>
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
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>1{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>2{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>3{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>4{"\n"}단{"\n"}계</Text>
                        <Text style = {{fontFamily: 'NanumSquare', fontSize: 14}}>R{"\n"}E{"\n"}M</Text>
                    </View>
                    <View style={{width: 248, height: 438}}>
                        <LineChart
                            yMin={77}
                            yMax={110}
                            style={{ height: 200, height: 438 }}
                            data={ data }
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Grid/>
                        </LineChart>
                        <TouchableOpacity style={{height: 20, width: 248, marginTop: 15, alignItems: 'center', justifyContent: 'center' ,backgroundColor: 'blue'}}>
                            <Text style={{fontFamily: 'NanumSquare', fontSize: 15, color: 'white'}}>All data</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: 30}}></View>
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
    },
    alig: {fontFamily: 'NanumSquare', fontSize: 12, marginBottom: 49},
    col: {alignItems:"center", flex:1,height: 528, flexDirection: 'column-reverse', marginLeft: 24},
});