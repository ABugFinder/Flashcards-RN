import * as eva from '@eva-design/eva';
import * as React from 'react';
import CreateExam from './screens/CreateExam';
import AllExams from './screens/AllExams';
import { Button, View, Text ,StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


// Secciones de la documentacion Utilizadas
// Navigation Prop
// Navigation LifeCycle
// Nesting Navigator
// Tab Navigator
// Stack
// Moving Between Screens
// -----------------------------------------------------------------------------------------



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
  
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#004C8C" />
      <Text>Home Screen</Text>
      
      <Button //Simula enviandote a "empezar" el examen del tema
        title="Go to Exam"
        onPress={() => navigation.navigate('Exam')}
      />
      <Button //Simula enviandote a "editar" las preguntas de el tema creado
        title="Go to EditarTema"
        onPress={() => navigation.navigate('Edit')}
      />
      <Button 
        title="crear Tema"
        onPress={() => navigation.navigate('Create Exam')}
        />
      <Button 
        title="Examenes"
        onPress={() => navigation.navigate('All Exams')}
        />
      <Button title="Eliminar Tema"/>

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
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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


