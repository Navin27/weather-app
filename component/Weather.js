import React ,{useState} from 'react';
import {View , Text, StyleSheet , TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';
import { MaterialCommunityIcons , Entypo, AntDesign , MaterialIcons} from '@expo/vector-icons';
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
    const [isModal , setIsModal] = useState(false)
    if (weather != null) {
      return (
        <View
          style={[
            styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }
          ]}
        >
          <View style={styles.headerContainer}>
            <View style = {{width : "100%", height: '10%', backgroundColor: '#f2f2f2', padding : "10%", flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style = {{alignItems:'center'}}>Menu</Text>
              <TouchableOpacity onPress = { ()=> setIsModal(!isModal)}>
                <Entypo name="dots-three-vertical" size={24} color="black" />
              </TouchableOpacity>
              </View>
            <Modal 
              visible = {isModal}
              transparent = {true}
              // animationType = {'fade'}
              onRequestClose = { () => setIsModal(!isModal)}
              style = {{height: "20%", backgroundColor: "red",}}
              >
              <TouchableWithoutFeedback onPress = { () => setIsModal(!isModal)}>
                <View style = {stylesss.modalOusideView}>
                  <View style = {stylesss.modalInsideView}>
                    <View style = {{flexDirection: 'row', padding: 5}}>
                      <AntDesign name="sharealt" size={24} color="black" />
                      <View style = {{paddingLeft:10}}><Text>share</Text></View>
                      </View>
                    <View style = {{flexDirection: 'row',padding: 5}}>
                      <Entypo name="block" size={24} color="black" />
                      <View style = {{paddingLeft:10}}><Text>block</Text></View>
                      </View>
                    <View style = {{flexDirection: 'row', padding: 5}}>
                      <MaterialIcons name="report" size={24} color="black" />
                      <View style = {{paddingLeft:10}}><Text>report</Text></View>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
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

  const stylesss = StyleSheet.create({
    modalInsideView:{
      justifyContent: 'center',
      backgroundColor : "#f2f2f2",
      height: 100 ,
      width: '70%',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
  },
  modalOusideView:{
      flex:1,
      paddingTop : 60,
      paddingRight: 40,
      // justifyContent: 'center',
      alignItems: "flex-end",
      backgroundColor: 'grey',
      opacity: 0.9
  },
  })
  

export default Weather;