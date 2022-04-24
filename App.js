/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image
 } from 'react-native';
  import {NavigationContainer} from "@react-navigation/native";
  import Giris from './src/screens/Giris' 
  import Home from './src/screens/Home'
  import {createStackNavigator} from "@react-navigation/stack";
  import Kayit from './src/screens/Kayit';
  import Acilis from './src/screens/Acilis';
  import Harita from './src/screens/Harita';
import Eczane from './src/screens/Eczane';

 const Stack = createStackNavigator();
 export default function App () { 


      return (
      <NavigationContainer>
       <StatusBar backgroundColor={'#ff0000'}  />
     <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} options={{
          title: 'NEYİM VAR',
          headerStyle:{
            backgroundColor:'#ff0000'
          },
          headerTintColor:'#fff',
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontWeight:'700',
            letterSpacing:.5
          },
       }}
       />
       <Stack.Screen  name="Giris" component={Giris} options={{
          title: 'NEYİM VAR',
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: '700',
            letterSpacing:.5
          },
        }}/>
        <Stack.Screen name='Kayit' component={Kayit}  options={{
          title: 'NEYİM VAR',
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: '700',
            letterSpacing:.5
          },
        }}/>
        <Stack.Screen name="Harita" component={Harita} options={{
        title: 'NEYİM VAR',
        headerStyle:{
          backgroundColor:'#ff0000'
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontWeight:'700',
          letterSpacing:.5
        },
     }}
       />
       <Stack.Screen name="Eczane" component={Eczane} options={{
        title: 'NEYİM VAR',
        headerStyle:{
          backgroundColor:'#ff0000'
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontWeight:'700',
          letterSpacing:.5
        },
     }}
       />
     </Stack.Navigator>
     </NavigationContainer>
        )
   
 }
 
 
 
 
 
 