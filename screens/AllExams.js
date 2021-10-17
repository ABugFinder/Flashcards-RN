import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { Button, View ,StyleSheet, AsyncStorage, Text, List, ListItem, Divider, Layout} from 'react-native';
import {NavigationContainer, useNavigation, useFocusEffect} from '@react-navigation/native';
import { ApplicationProvider} from '@ui-kitten/components';






  export default function AllExams() {
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
    };

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item}`}
        />

    );


    return (
        <View>
            <Text>{JSON.stringify(exams)}</Text>
        </View>
    );
  }
  /*<List
                data={exams.reverse()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />*/