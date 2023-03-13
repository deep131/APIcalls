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
import {SvgUri} from 'react-native-svg';

const Cricket = () => {
  let [cricket, setCricket] = useState([]);
  const uri = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';

  useEffect(() => {
    call();
  }, [call]);

  const call = () => {
    axios
      .get(uri, {
        headers: {
          'X-RapidAPI-Key':
            'e1342793b1msh57013f1722a0196p15cfccjsn1c144f8a9c99',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
        },
      })
      .then(response => {
        console.log('>>>', JSON.stringify(response?.data?.typeMatches[0]?.seriesMatches));
    //    response?.data && setCricket(response?.data?.typeMatches[0]?.seriesMatches);
      });
  };

  return (
    <View style={{flex: 1}}>
      <FlatList data={cricket} renderItem={({item}) => 
      <View>
<Text></Text>
      </View>
    }
     />
    </View>
  );
};
export default Cricket;
