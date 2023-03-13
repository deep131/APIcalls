import React, {useState} from 'react';
// import {useNavigate} from 'react-router';
import {useStudentStore} from './store/index';
import AddStudentModal from './components/AddStudentModal';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const Home = () => {
//   const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const students = useStudentStore(state => state.students);
  const addStudent = useStudentStore(state => state.addStudent);
  const removeStudent = useStudentStore(state => state.removeStudent);
  const updateStudent = useStudentStore(state => state.updateStudent);

  console.log(students);

  const handleModalClose = response => {
    setModalOpen(false);
    if (response) {
      console.log(response);
      if (response.id) {
        updateStudent({
          name: response.name,
          section: response.section,
          id: response.id,
        });
      } else {
        addStudent({name: response.name, section: response.section});
      }
    }
    modalData && setModalData(null);
  };

  const handleDelete = id => {
    removeStudent(id);
  };

  const editItem = item => {
    setModalData(item);
    setModalOpen(true);
  };
const renderList=(item)=>{
    <View style={{flex:1}}>
    {console.log(item.name)}

<Text style={{color :'black',fontSize:24}}>{item.section}</Text>
{console.log(item.section)}
<Text style={{color :'black',fontSize:18}}>{item.name}</Text>


<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<TouchableOpacity
 onPress={()=>handleDelete(item.id)}
  style={{backgroundColor: 'red', width: 50, height: 50}}
><Text></Text></TouchableOpacity>;
<TouchableOpacity
onPress={()=>editItem(item.id)}
 style={{backgroundColor: 'green', width: 50, height: 50}}
></TouchableOpacity>
</View>
</View>

}
  return (
    <View style={{flex:1}}>
      <TouchableOpacity
     onPress={()=>setModalOpen(true)}
        style={{
          backgroundColor: 'black',
          borderRadius: 12,
          borderColor: 'white',
          width: 100,
          height: 50,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
    
          ADD
        </Text>
      </TouchableOpacity>

      {modalOpen ? (
        <AddStudentModal
          onCloseModal={handleModalClose}
          initialData={modalData}
        />
      ) : null}
<FlatList
data={students}

renderItem={({item}) => renderList(item)}
/>
    
    </View>
  );
};

export default Home;
