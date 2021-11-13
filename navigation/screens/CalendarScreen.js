import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function CalendarScreen({ navigation }) {


    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      setText(fDate)


    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
      };
    
  

    return (
        <View style={styles.container} >
            <Text style={{fontWeight:'bold', fontSize:20}} >{text} </Text>
        <View style={{margin:20}}>
          <Button onPress={showDatepicker} title="Mostrar Calendario" />
        </View>
      
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
  })