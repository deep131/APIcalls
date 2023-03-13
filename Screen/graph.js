import React from 'react';
import {Text, View,Image} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';



const BasicExample = () => (
  <SkeletonPlaceholder speed={150}
    style={{
      flex:1,
      backgroundColor: 'black',
    }}>
  <View borderRadius={4}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
          <Image style={{width: 120, height: 100}} source={require('../Image/edit2.png')} />
          <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18,color:"white"}}>Hello world</Text>
        </View>
      </View>
    </View>
  </SkeletonPlaceholder>
);

export default BasicExample;