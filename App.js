import * as eva from '@eva-design/eva';
import * as React from 'react';
import CreateExam from './screens/CreateExam';
import AllExams from './screens/AllExams';
import { Button, View, Text ,StyleSheet, StatusBar, SafeAreaView, FlatList, Pressable, ScrollView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 



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
        <ScrollView>
        <FlatList data={DATA} numColumns={2} style={styles.container} renderItem={renderItem} keyExtractor={item => item.id} />
        </ScrollView>
      </SafeAreaView>
  
      <Pressable
      style={styles.floatingButton}
      onPress={() => navigation.navigate('Create Exam')}>
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
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar Screen</Text>
    </View>
  );
}

// -----------------------------------------------------------------------------------------

//SON LOS COMPONENTES QUE NOS PERMITEN NAVEGAR ENTRE VISTAS !!NO BORRAR!!
const Tab = createBottomTabNavigator();
const ProgressStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const CalendarStack = createNativeStackNavigator();




//Cada Tab.Screen es un boton del bottom navigator, y de ahi cada uno parte con sus vistas agisnadas a ese Tab

export default function App() {

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
            ? 'home'
            : 'home-outline';
          } else if(route.name === 'Progress'){
            iconName = focused
            ? 'bar-chart'
            : 'bar-chart-outline';
          }else if(route.name === 'Calendar'){
            iconName = focused
            ? 'calendar'
            : 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;

        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'lightgray',
        
      })} 
        
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'lightgray',
          activeBackgroundColor: '#0278BD',
          inactiveBackgroundColor: '#0278BD',
              style: {
                    backgroundColor: '#CE4418',
                    paddingBottom: 3
              }
        }} 
        initialRouteName = "Home" > 

        <Tab.Screen name="Progress" >
          {() => (
            <ProgressStack.Navigator>
              <ProgressStack.Screen
                name="Progress"
                component={ProgressScreen}
                options={{
                  headerTintColor: '#fff',
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }}
              />
              <ProgressStack.Screen options={{
                  headerTintColor: '#fff',
                  headerStyle:{
                    backgroundColor: '#0278BD',
                  }
                }} name="LastTest" component={LastTestScreen} />
            </ProgressStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen  options={{
                  headerTintColor: '#fff',                
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} name="Home" component={HomeScreen} />
              <HomeStack.Screen options={{
                  headerTintColor: '#fff',
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} name="Exam" component={ExamScreen} />
              <HomeStack.Screen options={{
                  headerTintColor: '#fff',
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} name="Edit" component={EditScreen} />
              <HomeStack.Screen options={{
                  headerTintColor: '#fff',
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} name="Create Exam" component={CreateExam} />
              <HomeStack.Screen options={{
                  headerTintColor: '#fff',
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} name="All Exams" component={AllExams} />

            </HomeStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Calendar">
          {() => (
            <CalendarStack.Navigator>
              <CalendarStack.Screen options={{
                  headerTintColor: '#fff',
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }}  name="Calendar" component={CalendarScreen} />
            </CalendarStack.Navigator>
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  container: {
    margin: 20,
    alignContent: 'center',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemCard: {
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    marginTop: 10,
    height: 100,
    width: 150,
    backgroundColor: '#fff',
    shadowColor: "#ECECEC",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,

  },
  buttonSpace:{
    flex:1,
    flexDirection: 'row',
    margin: 5,
    height: 50,
    alignContent: 'space-between',
    alignItems: 'center'

    
  },
  buttonEmpezar: {
    marginTop: 5,
    padding: 5,
    color: '#2E7D32',
    fontSize: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonEdit: {
    marginTop: 5,

    padding: 5,
    color: '#FF5F52',
    fontSize: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'



  },
  titleCard:{
    height:50,
    width: 150,
    padding: 10,
    backgroundColor: '#58A5F0',
    alignContent: 'center',
    alignItems: 'center',
  },
  textCard: {
    fontSize: 20,
    color: '#fff',
  },
  floatingButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'contain',
      width: 75,
      height: 75,
      borderRadius: 50,
      backgroundColor: '#2E7D32',
      position: 'absolute',
      right: 20,
      top: 475,
     
      
    }
});

