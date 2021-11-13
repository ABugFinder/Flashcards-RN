import React, {useState} from 'react';
import { View,  StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native';
import { FAB, Avatar, Button, Card, IconButton, Colors, Dialog, Portal, Provider, Paragraph, Divider, ProgressBar, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit";


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
];






export default function ProgresoScreen({ navigation }) {


  const [verChartAnillos, setVerChartAnillos] = useState(true);
  const [verChartBarras, setVerChartBarras] = useState(false);

  const mostrarAnillos = () => {
    setVerChartAnillos(true);
    setVerChartBarras(false);
  };

  const mostrarBarras = () => {
    setVerChartAnillos(false);
    setVerChartBarras(true);
  };



  const Item = ({ title }) => (
    <Card style={styles.item} onPress={console.log('Presionado')}>
      <Card.Title title={title}/>
      <Card.Content></Card.Content>
      <Card.Actions>
      <Button color={Colors.amber800}  onPress={() => navigation.navigate('Revision') } >Revision</Button>
      <Button color={Colors.amber800}>Estadisticas</Button>

      </Card.Actions>
    </Card>
  );

    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

    const screenWidth = Dimensions.get("window").width;

    const dataChartAnillos = {
        labels: ["Intento 1", "Intento 2", "Intento 3"], // optional
        data: [0.4, 0.6, 0.8]
      };

      const dataChartBarras = {
        labels: ["Intento#1", "Intento#2","Intento#3"],
        legend: ["Aciertos", "Fallas"],
        data: [
          [6, 4],
          [5, 5],
          [8,2],
        ],
        barColors: ["#2E7D32", "#C62828"]
      };

      const chartConfig = {
        backgroundGradientFrom: "#ffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffff",
        backgroundGradientToOpacity: 0,
        useShadowColorFromDataset: true,	
        color: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#218838"
          }
      };

    return (
        <SafeAreaView style={ styles.container}>
           <Card style={styles.itemChart} >
                <Card.Title title="Aciertos Por Intento"  />
                <Card.Content>

                  {
                    verChartAnillos ? ( 
                      <View style={styles.barChart} >
                        <ProgressChart
                            data={dataChartAnillos}
                            width={screenWidth}
                            height={220}
                            strokeWidth={10}
                            radius={28}
                            chartConfig={chartConfig}
                            hideLegend={false}
                            style={{marginHorizontal: -70}}
                        />
                        </View>
                      ) : null
                  }

                  {
                    verChartBarras ? (
                      <StackedBarChart
                        data={dataChartBarras}
                        width={320}
                        height={220}
                        chartConfig={chartConfig}
                        style={{marginHorizontal: -10}}
                      />
                    ) : null
                  }

                   


                </Card.Content>
                <Card.Actions style={styles.buttonsProgress}>
                <Button color={Colors.amber800} onPress={mostrarAnillos} >Anillos</Button>
                <Button color={Colors.amber800} onPress={mostrarBarras }>Barras</Button>
                </Card.Actions>
                
            </Card>
            <Divider/>

          

            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal= {true}
            />

        </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
   
    container: {
        flex: 1
      },
      item: {
        height: 120,
        width: 230,
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 10,
        elevation: 5,
      },
      textIntento: {
        padding: 5,
      },

     barChart: {
          marginRight: 50
      },
      itemChart:{
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 10,
        elevation: 5,
      },
      
  })