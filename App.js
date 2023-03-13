import React from "react";

import  {useEffect} from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen'
import Crypto from "./Screen/Crypto";
import NewCall from "./Screen/NewCall";
import Coin from "./Screen/Coin";
import Cricket from "./Screen/Cricket";
import BasicExample from "./Screen/graph";
import Home from "./Screen/Home";
import Detail from "./Screen/Detail";
import EncDec from "./Screen/EncDec";
import { Provider } from 'react-redux';
import { store } from './Screen/RTKStore'


<Provider></Provider>
const App=()=>{
  
  const Stack = createStackNavigator(
  )
return(
  <Provider store={store}>

  <NavigationContainer>
    <Stack.Navigator>
    {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
    <Stack.Screen name="EncDec" component={EncDec} options={{ headerShown: false }} />

      <Stack.Screen name="BasicExample" component={BasicExample} options={{ headerShown: false }} />


    <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />


    <Stack.Screen name="Crypto" component={Crypto} options={{ headerShown: false }} />

    <Stack.Screen name="Coin" component={Coin} options={{ headerShown: false }} />

    <Stack.Screen name="Cricket" component={Cricket} options={{ headerShown: false }} />


    <Stack.Screen name="NewCall" component={NewCall} options={{ headerShown: false }} />

    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
    
    
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
  
    </Stack.Navigator>
    </NavigationContainer>
</Provider>
)
}
export default App;