import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
// import IonIcon from 'react-native-vector-icons/Ionicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
const RegisterScreen = () => {
  let [id, setId] = useState([]);
  const [list, setList] = useState(true);

  const register = () => {
    setList(!list);

    axios
      .get('https://reqres.in/api/users?page=2')

      .then(response => {
        for (let i = 0; i < response.data.data.length; i++) {
          // console.log(response.data.data[i].id)
          setId(response.data.data);
        }
        
        //for (let i=0;i<response.Countries.length;i++){//console.log(response.Countries[i].Country) }
      })

      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          marginTop: 10,
          width: 250,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          onPress={register}
          title={list ? 'Listview' : 'GridView'}
        ></Button>
      </View>

      <FlatList
        style={{marginBottom: 80, marginTop: 20}}
        data={id}
        key={list}
        numColumns={!list ? 1 : 2}
        renderItem={({item}) => (

          //mainview
          <View
            style={{
              flexDirection: list ? 'column' : 'row',
              width: list ? 150 : 300,
              height: list ? 170 : 90,
              borderWidth: 0.5,
              borderRadius: 10,
              borderColor: 'gray',
              marginTop: 10,marginLeft:5
            }}
          >
            <View
              style={{
                height: 35,
                width: 40,
                justifyContent: 'center',
                backgroundColor: '#fcf4a1',
                position: list ? 'absolute' : null,
                left: list ? null : 1,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 10,
              }}
            >
              {/* <IonIcon name='trash'></IonIcon> */}
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  left: '5%',
                }}
              >
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  source={require('../Image/read.png')}
                ></Image>
              </TouchableOpacity>
            </View>
          
               <View
              style={{
                height: 35,
                width: 40,
                justifyContent: 'center',
                backgroundColor: '#f76565',
                position: list ? 'absolute' : null,
                left: list ? 109 : 219,
                borderBottomLeftRadius: 30,
                borderTopRightRadius: 10,
              }}
            >
              {/* <IonIcon name='trash'></IonIcon> */}
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  left: '5%',
                }}
              >
                <Image
                  style={{
                    height: 24,
                    width: 24,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  source={require('../Image/delete.png')}
                ></Image>
              </TouchableOpacity>
            </View>
            <Image
              style={{
                height: 70,
                width: 70,
                borderRadius: 8,
                alignSelf: 'center',
                marginLeft: list?null:-30,
                marginTop: list ? 25 : 0,
              }}
              source={{uri: item.avatar}}
            />
            <View style={{alignSelf: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.bigtext}>{item.first_name}</Text>
                <Text style={styles.bigtext}> {item.last_name}</Text>
              </View>
              <Text style={styles.smalltext}>{item.email}</Text>
                 <View
              style={{
                height: 35,
                width: 40,
                justifyContent: 'center',
                backgroundColor: '#ADD8E6',
                top:list?39:26,
                borderBottomRightRadius:10,
                position:'absolute',
                 left:list?'60%':139 ,
                borderTopLeftRadius:30
              }}
            >
              {/* <IonIcon name='trash'></IonIcon> */}
              <TouchableOpacity
                style={{
                  // justifyContent: 'center',
                  // alignSelf: 'center',
                  left: '5%',
                }}
              >
                <Image
                  style={{
                    height: 24,
                    width: 24,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}
                  source={require('../Image/edit2.png')}
                ></Image>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 35,
                width: 40,
                justifyContent: 'center',
                backgroundColor: '#f7cdee',
                top:list?39:26,
                borderBottomLeftRadius:10,
                position:'absolute',
                 left:list?-15:-120 ,
                borderTopRightRadius:30
              }}
            >
              {/* <IonIcon name='trash'></IonIcon> */}
              <TouchableOpacity
                style={{
                  // justifyContent: 'center',
                  // alignSelf: 'center',
                  left: '5%',
                }}
              >
                <Image
                  style={{
                    height: 24,
                    width: 24,
             
                    justifyContent: 'center',
                  }}
                  source={require('../Image/add3.png')}
                ></Image>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bigtext: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    left: 10,
  },

  smalltext: {
    color: 'grey',
    fontSize: 10,
    textAlign: 'center',
    alignSelf: 'center',
    left: 10,
  },
});
export default RegisterScreen;
