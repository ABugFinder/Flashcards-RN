//View of create Test
import * as eva from '@eva-design/eva';
import * as React from 'react';
import { Button, View, AsyncStorage, TextInput , Text, Animated, TouchableWithoutFeedback, StyleSheet , Pressable } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { useState } from 'react';
import { color, Value } from 'react-native-reanimated';
import {Ionicons} from '@expo/vector-icons'
    const Separator = () => (
        <View style={styles.separator} />
    );


  export default function CreateTest() {

    //Object creation with state
    const initialData = {
        name: "",
        schoolMaterial: "",
        Questions: {},
    }
    const [test, setTest] = useState(initialData);

    //Navigator
    const navigation = useNavigation();

    //Function to change values of the object
    const handleChange = (value, name) => {
        setTest({...test, [name]: value});
    };

    //Function to save new Test in the token TESTS
    const saveTest  = async () => {
        const value = await AsyncStorage.getItem("TESTS");
        const ex = (value ? JSON.parse(value) : []);

        ex.push(test);

        console.log(test);

        await AsyncStorage.setItem("TESTS", JSON.stringify(ex))
        .then(() => navigation.navigate('Home'));

        setTest(initialData);
    };



  

        return (

            <View style={styles.top}>
                <Text>{JSON.stringify(test)}</Text>
                <Separator/>
                <TextInput
                    style= {styles.form}
                    placeholder="Nombre del Examen"
                    onChangeText={(text) => handleChange(text, 'name')}
                    maxLength={30}
                />
                <TextInput
                    style= {styles.form}
                    placeholder="Materia"
                    onChangeText={(text) => handleChange(text, 'schoolMaterial')}
                    maxLength={30}
    
                />
                <Pressable //Te envia a la vista
                    style={styles.buttonCreate}
                    onPress={saveTest}>
                        <Text style={{color: 'white'}}><Ionicons name="checkmark-sharp" size={32} color="white" /></Text>
                </Pressable>
            </View>
        );
    

    

   
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    },
    top: {
      flex: 1,
      backgroundColor: "#ECECEC",
      borderWidth: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 20,

    },

    form: {
        margin: 5,
        borderBottomWidth: 1,
        padding: 5,
    },

    buttonCreate: {
        marginTop: 10,
        marginLeft: 205,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 100,
        elevation: 3,
        backgroundColor: '#2E7D32',
        
        
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
   
  });