import * as eva from '@eva-design/eva';
import * as React from 'react';
import { Button, View, AsyncStorage, TextInput } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { useState } from 'react';


  export default function CreateExam() {
    const [exam, setExam] = useState("");
    const navigation = useNavigation();

    const saveExam  = async () => {
        const value = await AsyncStorage.getItem("EXAMS");
        const ex = value ? JSON.parse(value) : [];
        
        ex.push(exam);
        
        await AsyncStorage.setItem("EXAMS", JSON.stringify(ex))
        .then(() => navigation.navigate('All Exams'));

        setExam("");
    };

    return (
        <View>
            <TextInput
                value={exam}
                onChange={setExam}
                style={{color: "#000000", fontSize: 20}}
                multiline={true}
                autoFocus
                selectionColor='#fff'
            />
            <Button //Te envia a la vista
            title="Crear Examen"
            onPress={saveExam} 
            />
        </View>
    );
  }