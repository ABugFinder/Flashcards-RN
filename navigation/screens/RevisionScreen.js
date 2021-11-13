import * as React from 'react';
import { FAB, Avatar,Text, Button, Card, IconButton, Colors, Dialog, Portal, Provider,Subheading, Paragraph, Divider, TextInput, Title } from 'react-native-paper';
import { View,  StyleSheet,FlatList, SafeAreaView,StatusBar } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        pregunta: '¿De donde es origen Aristoteles?',
        respuesta: 'Respuesta: Jaja saludos',
  
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        pregunta: '¿Quien gana Felipe o Luna?',
        respuesta: 'Respuesta: El neto',
  
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        pregunta: '¿El mejor amigo de Sergio?',
        respuesta: 'Respuesta: El Panochudo',
  
      },
  ];

  const theme ={
      colors: {
          text: 'white'
      }
  };
  
  const Item = ({ pregunta, respuesta }) => (
    <Card style={styles.item}>
            <Card.Title   title={pregunta} subtitle={respuesta} />
            <Card.Content>
                <Paragraph>Tu respuesta: Lorem ipsum lorem ipsum </Paragraph>
            </Card.Content>
          </Card>
  );

export default function RevisionScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <Item pregunta={item.pregunta} respuesta={item.respuesta}/>
      );

    return(
        <SafeAreaView style={styles.container} >
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 10,
      backgroundColor: 'green',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 5,
        justifyContent: 'center',
        elevation: 5,
      },
      title: {
          backgroundColor: 'green',
          tintColor: 'white',
      },

      input: {
          padding: 5,
          
      }
  })