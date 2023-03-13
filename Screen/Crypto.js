import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import moment from 'moment/moment';
const Crypto = () => {
  let [airline, setAirline] = useState([]);
  const uri = 'https://aerodatabox.p.rapidapi.com/flights/number/DL47';

  const call = () => {
    axios
      .get(uri, {
        headers: {
          'X-RapidAPI-Key':
            'e1342793b1msh57013f1722a0196p15cfccjsn1c144f8a9c99',
          'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
        },
      })
      .then(response => {
        JSON.stringify(response);
        if (response.status === 200) {
          console.log('Res', JSON.stringify(response.data));
          setAirline(response.data);
        }
      })
      .catch(error => {
        console.log(error.response.data.message);
      });
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ImageBackground
          style={{height: 400, width: 400}}
          source={require('../Image/v960-ning-11.jpg')}
        >
          <TouchableOpacity
            onPress={call}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              backgroundColor: 'white',
              width: 140,
              borderRadius: 10,
              height: 50,
              alignItems: 'center',
              top: 10,
              elevation: 5,
              right: 25,
            }}
          >
            <Text style={{color: 'orange', fontSize: 18, fontWeight: '500'}}>
              Fetch
            </Text>
          </TouchableOpacity>

          <FlatList
            data={airline}
            renderItem={({item}) => (
              // <View></View>
              //mainview
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 60,
                }}
              >
                <View
                  style={{
                    backgroundColor: 'orange',
                    width: 120,
                    alignSelf: 'center',
                    left: 20,
                    alignItems: 'center',
                    borderRadius: 12,
                    height: 50,
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{color: '#fff', fontSize: 16, fontWeight: '700'}}
                  >
                    {moment(item.departure.actualTimeLocal).format(' hh:mm')}
                  </Text>
                  <Text
                    style={{color: '#fff', fontSize: 18, fontWeight: '500'}}
                  >
                    {item.departure.airport.municipalityName}
                  </Text>
                </View>
                <Image
                  style={{height: 40, width: 40, left: 40}}
                  source={require('../Image/international.png')}
                ></Image>
                <View
                  style={{
                    backgroundColor: 'orange',
                    width: 130,
                    alignSelf: 'center',
                    alignItems: 'center',
                    left: 50,
                    borderRadius: 12,
                    height: 50,
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{color: '#fff', fontSize: 16, fontWeight: '700'}}
                  >
                    {moment(item.arrival.scheduledTimeLocal).format('hh:mm')}
                  </Text>
                  <Text
                    style={{color: '#fff', fontSize: 18, fontWeight: '500'}}
                  >
                    {item.arrival.airport.municipalityName}
                  </Text>
                </View>
              </View>
            )}
          />
        </ImageBackground>
      </View>
      <View style={{flex: 2.2, backgroundColor: 'orange', borderRadius: 20}}>
        <View>
          <FlatList
            data={airline}
            renderItem={({item}) => (
              //mainview
              <View>
                <View
                  style={{
                    flexDirection: 'row',

                    marginTop: 20,
                    justifyContent: 'space-around',
                  }}
                >
                  <View
                    style={{
                      marginLeft: 20,
                      alignItems: 'center',
              
                    }}
                  >
                    <Text style={{color: 'white'}}>Depart</Text>
                    <Text
                      style={{color: '#fff', fontSize: 20, fontWeight: '700'}}
                    >
                      {moment(item.departure.actualTimeLocal).format(' hh:mm')}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      fontWeight: '700',
               right:5
                    }}
                  >
                    {item.airline.name}
                  </Text>
                  <View
                    style={{
                 
                      alignSelf: 'center',
                      alignItems: 'center',

                      borderRadius: 12,
                    
                    }}
                  >
                    <Text style={{color: 'white'}}>Arrive</Text>
                    <Text
                      style={{color: '#fff', fontSize: 20, fontWeight: '700'}}
                    >
                      {moment(item.arrival.scheduledTimeLocal).format('hh:mm')}
                    </Text>
           
                  </View>
                  
                </View>
                
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 14,
                    position: 'absolute',
                    top: 50,
                    fontWeight: '380',
                    left: 130,
                  }}
                >
                  {item.aircraft.model}
                </Text>
                <Text style={{color:'white',fontSize:22,fontWeight:'700',alignSelf:'center',marginTop:15}}>Departure</Text>
              <View style={{width:'90%',borderWidth:1,alignSelf:'center',marginTop:5}}></View> 
                
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <View>
              <Text style={{color: 'white',fontSize:18,fontWeight:'500'}}>Terminal</Text> 
              <Text style={{color: 'white',alignSelf:'center',marginTop:5}}>{item.departure.terminal}</Text>
             
              </View>
              <View>
              <Text style={{color: 'white',fontSize:18,fontWeight:'500'}}>CheckInDesk</Text> 
              <Text style={{color: 'white',alignSelf:'center',marginTop:5}}>{item.departure.checkInDesk}</Text>
             
              </View>
              <View>
              <Text style={{color: 'white',fontSize:18,fontWeight:'500'}}>Gate</Text> 
              <Text style={{color: 'white',alignSelf:'center',marginTop:5}}>{item.departure.gate}</Text>
             
              </View>
              <View>
              <Text style={{color: 'white',fontSize:18,fontWeight:'500'}}>Runway</Text> 
              <Text style={{color: 'white',alignSelf:'center',marginTop:5}}>{item.departure.runway}</Text>
             
              </View>
              </View>
              <Text style={{color:'white',fontSize:22,fontWeight:'700',alignSelf:'center',marginTop:15}}>Arrival</Text>
              <View style={{width:'90%',borderWidth:1,alignSelf:'center',marginTop:5}}></View> 
               
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <View>
              <Text style={{color: 'white',fontSize:18,fontWeight:'500'}}>Terminal</Text> 
              <Text style={{color: 'white',alignSelf:'center',marginTop:5}}>{item.arrival.terminal}</Text>
             
              </View>
       
        
      
              </View>
              <Text style={{color:'white',fontSize:22,fontWeight:'700',alignSelf:'center',marginTop:15}}>Status</Text>
              <View style={{width:'90%',borderWidth:1,alignSelf:'center',marginTop:5}}></View> 
               
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                  <View>
              <Text style={{color: 'white',fontSize:18,fontWeight:'500'}}>Status</Text> 
              <Text style={{color: 'white',alignSelf:'center',marginTop:5}}>{item.status}</Text>
             
              </View>
       
              <View>
              <Text style={{color: 'white',fontSize:18,fontWeight:'500'}}>Distance</Text> 
              <Text style={{color: 'white',alignSelf:'center',marginTop:5}}>{item.greatCircleDistance.km} km</Text>
             
              </View>
      
              </View>
              </View>
            )}
          />
        </View>
      </View>
    </View> 
  );
};
export default Crypto;
// import * as React from 'react';
// import { SvgUri } from 'react-native-svg';

// export default () => (
//   <SvgUri
//     width="100%"
//     height="100%"
//     uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
//   />
// );