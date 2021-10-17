import * as eva from '@eva-design/eva';
import * as React from 'react';
import { Button, View, AsyncStorage, TextInput , Text} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { useState } from 'react';
import { Value } from 'react-native-reanimated';


  export default function CreateExam() {

    const initialData = {
        name: "",
        schoolMaterial: "",
    }
    const [exam, setExam] = useState(initialData);
    const navigation = useNavigation();

    const handleChange = (value, name) => {
        setExam({...exam, [name]: value});
    };

    const saveExam  = async () => {
        const value = await AsyncStorage.getItem("EXAMS");
        const ex = [];
        ex.push(value ? JSON.parse(value) : []);

        ex.push(exam);

        await AsyncStorage.setItem("EXAMS", JSON.stringify(ex))
        .then(() => navigation.navigate('All Exams'));

        setExam(initialData);
    };

    return (
        <View>
            <Text>{JSON.stringify(exam)}</Text>
            <TextInput
                
                placeholder="Nombre del Examen"
                onChangeText={(text) => handleChange(text, 'name')}
            />
            <TextInput
               
                placeholder="Materia"
                onChangeText={(text) => handleChange(text, 'schoolMaterial')}
            />
            <Button //Te envia a la vista
                title="Crear Examen"
                onPress={saveExam}
            />
        </View>
    );
  }