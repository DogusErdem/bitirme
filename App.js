/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
  import {NavigationContainer} from "@react-navigation/native";
//  import {createStackNavigator} from "@react-navigation/stack";
//  import Route from './src/Route';
  import Giris from './src/screens/Giris' 
  import {createStackNavigator} from "@react-navigation/stack";
import Kayit from './src/screens/Kayit';

 const Stack = createStackNavigator();
 export default function App () { 
   
      return (
      <NavigationContainer>
       <StatusBar backgroundColor={'#D85172'}  />
     <Stack.Navigator>
       <Stack.Screen  name="Giris" component={Giris} options={{
          title: 'NEYİM VAR',
          headerStyle: {
            backgroundColor: '#D85172',
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
            backgroundColor: '#D85172',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: '700',
            letterSpacing:.5
          },
        }}/>
     </Stack.Navigator>
     </NavigationContainer>
        )
   
 }
 
 
 
 
 
 