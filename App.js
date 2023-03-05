import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';

import axios from 'axios';


const API_KEY = '46045c82453014d02ee6311a65fc4b17';


export default class extends React.Component {
  state = {
    isLoading: false
  }




  getWeather = async (latitude, longitude) => {

    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      console.log(data);
  }


  coordinatToServer = async (latitude, longitude) => {
    //Тут axios'ом послать запрос на свой сервер
  }

  getLocation = async () => {
    try {
      
      //https://api.openweathermap.org/data/2.5/weather?lat=59.7957572&lon=30.6353518&appid={46045c82453014d02ee6311a65fc4b17}
      //http://api.openweathermap.org/geo/1.0/reverse?lat=59.7957572&lon=30.6353518&limit={limit}&appid=46045c82453014d02ee6311a65fc4b17
      //POST GET PUT And Other, it's accept geoPosition
      //Здесь нужен какой-то скорее трекинг местоположения сделать
      //Сейчас координаты будут отправляться на api , можно так же сделать функцию с отправкой на сервер
      await Location.requestBackgroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.coordinatToServe(latitude, longitude); 
      this.setState({isLoading: false});      
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