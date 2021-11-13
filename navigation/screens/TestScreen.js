import * as React from 'react';
import { FAB, Avatar,Text, Button, Card, IconButton, Colors, Dialog, Portal, Provider,Subheading, Paragraph, Divider, TextInput, Title } from 'react-native-paper';
import { View,  StyleSheet,FlatList, SafeAreaView,StatusBar } from 'react-native';


export default function TestScreen({ navigation }) {

    const [textRespuesta, setTextRespuesta] = React.useState('');

    return (
        <View style={styles.container}>
              <Card style={styles.card}>
            <Card.Title  title="Pregunta #1" />
            <Card.Content>
                <Title>¿De donde es origen Aristoteles? </Title>
                <TextInput
                                style= {styles.input}
                                mode="outlined"
                                label="Respuesta"
                                value={textRespuesta}
                                onChangeText={textRespuesta => setTextRespuesta(textRespuesta)}
                                placeholder="Type something"
                                activeOutlineColor= {Colors.blueA400}
                                right={<TextInput.Affix text="/20" />}
        
                                />
            </Card.Content>
            <Card.Actions>
                <Text>1/4</Text>
              <Button style={styles.button} color={Colors.amber800}  >Revisar</Button>
            </Card.Actions>
          </Card>
        </View>
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
        alignItems: 'center',
        justifyContent: 'center'

      },
      card: {
        padding: 5,
        justifyContent: 'center',
        elevation: 5,
        height: 225,
        width: 335,
        
      },
      title: {
        fontSize: 20,
      },

      input: {
          padding: 5,
      },
      button:{
          marginLeft: 'auto',
      },
      
  })