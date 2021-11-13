import * as React from 'react';
import { View, Text, StyleSheet,FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { FAB, Avatar, Button, Card, IconButton, Colors, Dialog, Portal, Provider, Paragraph, Divider, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import { TabActions } from '@react-navigation/routers';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      pregunta: '¿De donde es origen Aristoteles?',
      respuesta: 'Jaja saludos',

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      pregunta: '¿Quien gana Felipe o Luna?',
      respuesta: 'El neto',

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      pregunta: '¿El mejor amigo de Sergio?',
      respuesta: 'El Panochudo',

    },
   
    
   
    
  ];

  

 

export default function PreguntasScreen({ navigation }) {
        const [visibleCrear, setVisibleCrear] = React.useState(false);
        const [visibleEditar, setVisibleEditar] = React.useState(false);


        const showDialogCrear = () => setVisibleCrear(true);
    
        const hideDialogCrear = () => setVisibleCrear(false);

        const showDialogEditar = () => setVisibleEditar(true);
    
        const hideDialogEditar = () => setVisibleEditar(false);
    
        const [textPregunta, setTextPregunta] = React.useState('');
        const [textRespuesta, setTextRespuesta] = React.useState('');
    
        const Item = ({ pregunta, respuesta }) => (

            <Card style={styles.item}>
            <Card.Title  title={pregunta} subtitle={respuesta} right={(props) => 
                <IconButton {...props} icon="close" size={20} color={Colors.redA400} onPress={() => {}} />}/>
            <Card.Actions>
              <Button color={Colors.amber800} onPress={showDialogEditar} >Editar</Button>
            </Card.Actions>
          </Card>
          );
    
    
        const renderItem = ({ item }) => (
            <Item pregunta={item.pregunta} respuesta={item.respuesta}/>
          );
        
    
        return (
            <Provider>
              <View style={{ flex: 1,  justifyContent: 'center' }}>
    
             
                <SafeAreaView style={styles.container}> 
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
    
                
                    <FAB
                        style={styles.fab}
                        icon="plus"
                        onPress={showDialogCrear}
                    />
                    <Portal>
                        <Dialog visible={visibleCrear} onDismiss={hideDialogCrear}>
                            <Dialog.Title>Crear Test  </Dialog.Title>
                            <Divider/>
                            <Dialog.Content>
    
                            <TextInput
                            style= {styles.input}
                            mode="outlined"
                            label="Pregunta"
                            value={textPregunta}
                            onChangeText={textPregunta => setTextPregunta(textPregunta)}
                            placeholder="Type something"
                            activeOutlineColor= {Colors.blueA400}
                            right={<TextInput.Affix text="/20" />}
    
                            />
    
                            <TextInput
                            style= {styles.input}
                            mode="outlined"
                            label="Respuesta"
                            value={textRespuesta}
                            placeholder="Type something"
                            onChangeText={textRespuesta => setTextRespuesta(textRespuesta)}
                            activeOutlineColor= {Colors.blueA400}
                            right={<TextInput.Affix text="/20" />}
                            />
                            </Dialog.Content>
                            <Dialog.Actions>
                            <Button color={Colors.green800} onPress={() => navigation.navigate('Preguntas')}>Crear</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                    
                    <Portal>
                        <Dialog visible={visibleEditar} onDismiss={hideDialogEditar}>
                            <Dialog.Title>Editar Test  </Dialog.Title>
                            <Divider/>
                            <Dialog.Content>
    
                            <TextInput
                            style= {styles.input}
                            mode="outlined"
                            label="Pregunta"
                            value={textPregunta}
                            onChangeText={textPregunta => setTextPregunta(textPregunta)}
                            placeholder="Type something"
                            activeOutlineColor= {Colors.blueA400}
                            right={<TextInput.Affix text="/20" />}
    
                            />
    
                            <TextInput
                            style= {styles.input}
                            mode="outlined"
                            label="Respuesta"
                            value={textRespuesta}
                            placeholder="Type something"
                            onChangeText={textRespuesta => setTextRespuesta(textRespuesta)}
                            activeOutlineColor= {Colors.blueA400}
                            right={<TextInput.Affix text="/20" />}
                            />
                            </Dialog.Content>
                            <Dialog.Actions>
                            <Button color={Colors.green800} onPress={() => navigation.navigate('Preguntas')}>Crear</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
    
    
               
    
                <StatusBar backgroundColor="#004C8C" style="light" />
           
             </View>
            </Provider>
    
          
           
           
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
        fontSize: 20,
      },

      input: {
          padding: 5,
      }
  })
  