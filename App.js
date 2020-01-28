import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  API_KEY from './utils/WeatherApiKey';
import Weather from './component/Weather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer : {
    flex :1,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});


export default class App extends React.Component{
  state = {
    isLoading : false,
    temperature : 0,
    weatherCondition : null,
    error: null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: "Error Getting Weather Conditions"
        });
      }
    )
  }

  fetchWeather(lat = 25, lon =25 ){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        isLoading: false
      })
    })
  }

  render(){
    const { isLoading , weatherCondition, temperature } = this.state 

    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style = {styles.loadingContainer}>
            <Text style = {styles.loadingText }>Fetching the wather ....</Text>
          </View>
        ) : (
          <Weather weather = {weatherCondition} temperature = {temperature}> </Weather>
        )}
      </View>
    );
  }
}
