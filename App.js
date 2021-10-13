import * as React from 'react';
import { Button, View, Text ,StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card } from '@ui-kitten/components';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button //Simula enviandote a "empezar" el examen del tema
        title="Go to Exam"
        onPress={() => navigation.navigate('Exam')}
      />
      <Button //Simula enviandote a "editar" las preguntas de el tema creado
        title="Go to EditarTema"
        onPress={() => navigation.navigate('Edit')}
      />
      <Button title="crear Tema"  />
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

//Cada Tab.Screen es un boton del bottom navigator, y de ahi cada uno parte con sus vistas agisnadas a ese Tab

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false}} 
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'lightgray',
          activeBackgroundColor: '#0278BD',
          inactiveBackgroundColor: '#0278BD',
              style: {
                    backgroundColor: '#CE4418',
                    paddingBottom: 3
              }
        }}  > 

        <Tab.Screen name="Progress" >
          {() => (
            <ProgressStack.Navigator>
              <ProgressStack.Screen
                name="Progress"
                component={ProgressScreen}
              />
              <ProgressStack.Screen name="LastTest" component={LastTestScreen} />
            </ProgressStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Exam" component={ExamScreen} />
              <HomeStack.Screen name="Edit" component={EditScreen} />

            </HomeStack.Navigator>
          )}
        </Tab.Screen>

        <Tab.Screen name="Calendar">
          {() => (
            <CalendarStack.Navigator>
              <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
            </CalendarStack.Navigator>
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 

  button: {
    margin: 5
  }
});