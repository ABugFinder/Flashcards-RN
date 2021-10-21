import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { Button, View ,StyleSheet, AsyncStorage, Text, List, ListItem, Divider, Layout} from 'react-native';
import {NavigationContainer, useNavigation, useFocusEffect} from '@react-navigation/native';
import { ApplicationProvider} from '@ui-kitten/components';






  export default function AllTests() {
    const [exams, setExams] = useState([]);
    const navigation = useNavigation();
    
    useFocusEffect(
        React.useCallback(() => {
            getExams();
        }, [])
    );

    const getExams = () => {
        AsyncStorage.getItem("EXAMS").then((exams) =>{
            setExams(JSON.parse(exams));
        });
        console.log(exams);
       // AsyncStorage.clear(); borra todo 
     
    };

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item}`}
        />

    );


    return (
        <View>
            <Text>{JSON.stringify(exams[0].name)}</Text>
        </View>
    );
  }
  /*<List
                data={exams.reverse()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />*/