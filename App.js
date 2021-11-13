import * as React from 'react';
import MainContainer from './navigation/MainContainer';

<<<<<<< HEAD
function App() {
=======


// Secciones de la documentacion Utilizadas
// Navigation Prop
// Navigation LifeCycle
// Nesting Navigator
// Tab Navigator
// Stack
// Moving Between Screens
// -----------------------------------------------------------------------------------------

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Forth Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.itemCard}>
    <View style={styles.titleCard}>
      <Text style={styles.textCard}>{title}</Text>
    </View>
    <View style={styles.buttonSpace} >
      <Pressable >
        <Text style={styles.buttonEmpezar}>Empezar</Text>
      </Pressable>
      <Pressable >
        <Text style={styles.buttonEdit}>Editar</Text>
      </Pressable>
    </View>
   
  </View>
);

//------------------------------------------------------------------------------------------
function ProgressScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Progress Screen</Text>
      <Button //Te envia a la vista
        title="Go to LastTest"
        onPress={() => navigation.navigate('LastTest')} 
      />
    </View>
  );
}

function LastTestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Last Test Screen</Text>
      <Button //Te regresa a la vista Progress
        title="Go to Progress"
        onPress={() => navigation.navigate('Progress')}
      />
    </View>
  );
}

// -----------------------------------------------------------------------------------------

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#004C8C" />
      <SafeAreaView>
        <ScrollView prop nestedScrollEnabled={true}>
          <FlatList nestedScrollEnabled={true}  data={DATA} numColumns={2} style={styles.container} renderItem={renderItem} keyExtractor={item => item.id} />
        </ScrollView>
      </SafeAreaView>
  
      <Pressable
      style={styles.floatingButton}
      onPress={() => navigation.navigate('Create Test')}>
        <Text style={{color: 'white'}}><AntDesign name="plus" size={32} color="white" /></Text>
      </Pressable>

    </View>
  );
}

function ExamScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Exam Screen</Text>
      <Button // Este boton extiende la vista, ejemplo: 1.0, 1.1, 1.2 (Crea un historial, Servira para las preguntas continuas)
        title="Go to Exam... again"
        onPress={() => navigation.push('Exam')}
      />
    </View>
  );
}

function EditScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Edit Screen</Text>
      <Button // Este boton extiende la vista, ejemplo: 1.0, 1.1, 1.2 (Crea un historial, Servira para las preguntas continuas)
        title="Go to Edit... again"
        onPress={() => navigation.push('Edit')}
      />
    </View>
  );
}

// -----------------------------------------------------------------------------------------

function CalendarScreen({ navigation }) {
>>>>>>> 582c5af6b05a4275acbdf13d61336baf1dd8ac69
  return (
    <MainContainer/>
  );
}

export default App;