import React from 'react';
import {View,Text,Image} from 'react-native';
import CryptoJS from 'react-native-crypto-js';

// let data = [{id: 1}, {id: 2}];

// // Encrypt
// let ciphertext = CryptoJS.AES.encrypt(
//   JSON.stringify(data),
//   'secret key 123',
// ).toString();
// console.log(ciphertext);
// // Decrypt
// let bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// console.log(decryptedData);


import { useGetPokemonByNameQuery } from './RTKSlice'

export default function EncDec() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')


  return (


    <View>
{
 error?(
  <Text>oh no error</Text>
 ) :isLoading?(
<Text>Loading</Text>
 ):
  
 
 data?(
  <View >
  <Text style={{alignSelf:'center',fontSize:24,color:'black'}}>{data.species.name}</Text>

  <Image style={{height:250,width:250,alignSelf:'center'}} source={{uri:data.sprites.front_shiny}}/>

  </View>
 ):null
}
    </View>
    
  )
}
