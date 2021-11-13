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
      title: 'Programacion',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Calculo',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Historia',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29dAA',
        title: 'Biologia',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d60',
        title: 'BD2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d80',
        title: 'Arte',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29dfff',
        title: 'Trabajo',
    },
   
    

  ];
  
 


export default function HomeScreen({ navigation }) {

    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const [textTest, setTextTest] = React.useState('');
    const [textMateria, setTextMateria] = React.useState('');

    const Item = ({ title }) => (
      <Card style={styles.item}>
      <Card.Title  title={title} right={(props) => 
          <IconButton {...props} icon="close" size={20} color={Colors.redA400} onPress={() => {}} />}/>
      <Card.Actions>
        <Button color={Colors.green800} onPress={() => navigation.navigate('Test')} >Empezar</Button>
        <Button color={Colors.amber800} onPress={() => navigation.navigate('Preguntas')} >Editar</Button>
      </Card.Actions>
    </Card>
    );


    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    

    return (
        <Provider>
          <View style={{ flex: 1,  justifyContent: 'center' }}>

         
            <SafeAreaView style={styles.container}> 
                <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={showDialog}
                />
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Crear Test  </Dialog.Title>
                        <Divider/>
                        <Dialog.Content>

                        <TextInput
                        style= {styles.input}
                        mode="outlined"
                        label="Test"
                        value={textTest}
                        onChangeText={textTest => setTextTest(textTest)}
                        placeholder="Type something"
                        activeOutlineColor= {Colors.blueA400}
                        right={<TextInput.Affix text="/20" />}

                        />

                        <TextInput
                        style= {styles.input}
                        mode="outlined"
                        label="Materia"
                        value={textMateria}
                        placeholder="Type something"
                        onChangeText={textMateria => setTextMateria(textMateria)}
                        activeOutlineColor= {Colors.blueA400}
                        right={<TextInput.Affix text="/20" />}
                        />
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button color={Colors.green800} onPress={() => navigation.navigate('Preguntas')}>Crear</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>


           

            <StatusBar style="light" />
       
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
        height: 150,
        width: 170,
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 5,
        alignItems: 'center',
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
  