import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {View, Button, TextInput, Text} from 'react-native';

const NewCall = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    const parameter = {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    };

    axios.post('https://reqres.in/api/register', parameter).then(response => {
      console.log('response', response.data);
      if (response.status === 200) {
            navigation.navigate('LoginScreen');
      }
    });
  };

  return (
    <View style={{alignSelf: 'center', justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', fontSize: 20, top: 10}}>REGISTER</Text>
      <TextInput
        style={{borderWidth: 1, width: 200, alignSelf: 'center', marginTop: 50}}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
      ></TextInput>
      <TextInput
        style={{borderWidth: 1, width: 200, alignSelf: 'center', marginTop: 20}}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
      ></TextInput>
      <View style={{marginTop: 20, width: 200, alignSelf: 'center'}}>
        <Button onPress={submit} title={'REgister'}></Button>
      </View>
    </View>
  );
};
export default NewCall;
