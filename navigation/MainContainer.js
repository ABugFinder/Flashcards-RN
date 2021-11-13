import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import ProgresoScreen from './screens/ProgresoScreen';
import PreguntasScreen from './screens/PreguntasScreen';
import TestScreen from './screens/TestScreen';
import RevisionScreen from './screens/RevisionScreen';


//Screen names
const homeName = "Home";
const progresoName = "Progreso";
const calendarName = "Calendar";
const preguntasName = 'Preguntas';
const testName = 'Test';
const revisionName= "Revision"


/*  <Stack.Navigator>
            <Stack.Screen name={preguntasName} component={PreguntasScreen} />
        </Stack.Navigator>*/

const Stack = createStackNavigator();
const StackP = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home(){
  return(
    <Stack.Navigator>
            <Stack.Screen options={{
                  headerTintColor: '#fff',                
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }}  name={homeName} 
                component={HomeScreen}/>
            <Stack.Screen options={{
                  headerTintColor: '#fff',                
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }}  
                name={preguntasName} 
                component={PreguntasScreen} />
             <Stack.Screen options={{
                  headerTintColor: '#fff',                
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }}  
                name={testName} 
                component={TestScreen} />
            
  
    </Stack.Navigator>

    
  );
}

function Progreso(){

  return(
    <StackP.Navigator>

      <StackP.Screen options={{
              headerTintColor: '#fff',                
              headerStyle:{
                backgroundColor: '#0278BD'
              }
            }} 
            name={progresoName} 
            component={ProgresoScreen} />

      <StackP.Screen options={{
              headerTintColor: '#fff',                
              headerStyle:{
                backgroundColor: '#0278BD'
              }
            }}
            name={revisionName}
            component={RevisionScreen} />    
    </StackP.Navigator>
  );

 
}



function MainContainer() {
  return (
    <NavigationContainer>
      

      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === progresoName) {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';

            } else if (rn === calendarName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#E5E5E5',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          activeBackgroundColor: '#0278BD',
          inactiveBackgroundColor: '#0278BD',
          
        }}>

        <Tab.Screen options={{
                  headerShown: false,
                  headerTintColor: '#fff',                
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} 
                name={progresoName} 
                component={Progreso} />
        <Tab.Screen  options={{
                  headerShown: false,
                  headerTintColor: '#fff',                
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} 
                name={homeName}
                component={Home} >
                    

                </Tab.Screen>
        <Tab.Screen  options={{
                  headerTintColor: '#fff',                
                  headerStyle:{
                    backgroundColor: '#0278BD'
                  }
                }} 
                name={calendarName}
                component={CalendarScreen} />
      
       

      </Tab.Navigator>
      
      <StatusBar backgroundColor="#004C8C" style="light"/>
    </NavigationContainer>
  );
}

export default MainContainer;