import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,

} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';



const LoginScreen = () => {
  
const[emails,setEmail]=useState('');
const [password,setPassword]=useState('')
  const login = () => {
        

  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20, top: 10}}>Login</Text>
      <TextInput
        style={{borderWidth: 1, width: 200, alignSelf: 'center', marginTop: 50}}
        placeholder="Email"
      ></TextInput>
      <TextInput
        style={{borderWidth: 1, width: 200, alignSelf: 'center', marginTop: 20}}
        placeholder="Password"
      ></TextInput>
      <View
        style={{
          marginTop: 10,
          width: 250,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Button onPress={login} title="Login"></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textinput: {
    marginTop: 10,
    width: 250,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'black',
  },
});
export default LoginScreen;
