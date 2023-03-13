import React, {useState, useEffect} from 'react';
import {TextInput, TouchableOpacity, View,Text} from 'react-native';

const AddStudentModal = ({onCloseModal, initialData}) => {
  const [section, setSection] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    setSection(initialData?.section);
    setName(initialData?.name);
  }, []);

  const handleCancel = () => {
    onCloseModal(null);
  };

  const handleSave = () => {
    onCloseModal({
      name,
      section,
      id: initialData?.id,
    });
  };

  return (
    <View style={{flex: 1,alignSelf:'center'}}>
      <TextInput
        style={{width: 200, height: 50, borderRadius: 12, borderWidth: 1,marginTop:20}}
        onChangeText={e => setName(e)}
        value={name}
        placeholder="Name"
        placeholderTextColor="black"
      ></TextInput>
      <TextInput
        style={{
          width: 200,
          height: 50,
          borderRadius: 12,
          borderWidth: 1,
          marginTop: 10,
        }}
        value={section}
        onChangeText={e => setSection(e)}
        placeholder="Section"
        placeholderTextColor="black"
      ></TextInput>

      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          borderRadius: 12,
          borderColor: 'white',
          width: 150,
          height: 50,justifyContent:'center',alignSelf:'center',
          marginTop:20
        }}
        onPress={handleSave}
      >
        <Text style={{color:'white',fontSize:18,fontWeight:'bold',alignSelf:'center'}}> SAVE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          borderRadius: 12,
          borderColor: 'white',
          width: 150,
          height: 50,justifyContent:'center',alignSelf:'center',
          marginTop:20
        }}
        onPress={handleCancel}
      >
        <Text  style={{color:'white',fontSize:18,fontWeight:'bold',alignSelf:'center'}}> CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddStudentModal;
