import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';


const API_KEY = '968084f7f15501325343a32afa1a645a';


export default class extends React.Component {
  state = {
    isLoading: true
  }



  getLocation = async () => {
    try {
      
      
      
      //POST GET PUT And Other, it's accept geoPosition
      //Здесь нужен какой-то скорее трекинг местоположения сделать
      //Сейчас координаты будут отправляться на api , можно так же сделать функцию с отправкой на сервер
      await Location.requestBackgroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});      
      console.log(coords.latitude, coords.longitude);
      
    } catch (error) {
      Alert.alert('Жду принятия  ' ,'Примите соглашение на отпраку геоданных для подбора погоды...')
    }
    
  }

 


  componentDidMount(){
    this.getLocation();
  }
  
  
  render() {
    const {isLoading} = this.state;
    return (
      isLoading ? <Loading /> : null
    );
  }


  /*render() {
    const {isLoading} = this.state;
    return (
      isLoading ? <Loading /> : null
    );
  } */ 
}



//backgroundColor: '#30009C'
//backgroundColor: '#BB86FC'







/*import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';

export default function main() {

    return (
      <Loading />
    );
  }  
*/