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
import { SvgUri } from 'react-native-svg';

const Coin = () => {
  let [coin, setCoin] = useState([]);
  const uri = 'https://coinranking1.p.rapidapi.com/coins';

  useEffect(() => {
    call();
  }, [call]);

  const call = () => {
    axios
      .get(uri, {
        headers: {
          'X-RapidAPI-Key':
            'e1342793b1msh57013f1722a0196p15cfccjsn1c144f8a9c99',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        },
      })
      .then(response => {
        console.log('>>>', response.data.data.coins);
        setCoin(response.data.data.coins);
      });
  };

  const renderList = (item)=>{
    var ImageUrl = item?.iconUrl;
    return(
      <View
        style={{
          flex: 1,
        }}
      >


        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 5,
            width: '90%',
            padding: 10,
            height: 150,
            marginVertical: 10,
            borderRadius: 20,
          }}
        >
               
          {/* <SvgUri
            style={{alignSelf: 'center'}}
            width="60"
            height="60"
            uri={item.iconUrl}
          /> */}
          <View>
            {
              item?.iconUrl.toString().substr(-3, 3)==='svg' ?
              console.log('Url: ',item.iconUrl.toString())
              :
              null
            }
          
          
             <SvgUri
                width='50'
                height='50'
                uri={ImageUrl}
                />    
               

         </View>
          <Text
            style={{
              color: item.color,
              fontSize: 18,
              fontWeight: '500',
              paddingTop: 10,
            }}
          >
            Currency :{item.name}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={coin}
        renderItem={({item}) => renderList(item)}
      />
    </View>
  );
};
export default Coin;
