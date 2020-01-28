import React from 'react';
import {View , Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherCondition';


const styles = StyleSheet.create({
    weatherContainer: {
        flex : 1,
        backgroundColor : '#f7b733'
    },
    bodyContainer : {
        flex : 2,
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        paddingLeft : 25 ,
        marginBottom : 40 
    },
    headerContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    tempText : {
        fontSize : 48,
        color : '#fff'
    },
    title : {
        fontSize : 48,
        color : '#fff'
    },
    subTitle: {
        fontSize : 24,
        color : "#fff"
    },
    errorText: {
        fontSize :40,
        alignItems : 'center',
        justifyContent: 'flex-end',
        paddingLeft :40,
        paddingRight: 40,
        paddingTop:100
    }
});

const Weather = ({ weather, temperature }) => {
    if (weather != null) {
      return (
        <View
          style={[
            styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }
          ]}
        >
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons
              size={72}
              name={weatherConditions[weather].icon}
              color={'#fff'}
            />
            <Text style={styles.tempText}>{temperature}˚</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{weatherConditions[weather].title}</Text>
            <Text style={styles.subtitle}>
              {weatherConditions[weather].subtitle}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style = {styles.errorText}>Oh no, something went wrong</Text>
        </View>
      )
    };
  };
  
  Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
  };
  

export default Weather;