import AddStudentModal from '../Screen/components/AddStudentModal'
import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router';
import {useStudentStore} from './store/index';
import { View,Text } from 'react-native';

const Detail = () => {
  const {studentId} = useParams();

  const student = useStudentStore(
    useCallback(state => state.students.find(s => s.id === studentId), [
      studentId,
    ]),
  );

  return (
   <View>
    <Text>{student && JSON.stringify(student)}</Text>
   </View>
  );
};

export default Detail;
