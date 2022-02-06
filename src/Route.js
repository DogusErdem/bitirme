import React,{Component} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Image,
   Text,
   useColorScheme,
   Button,
   View,
   Settings,
 } from 'react-native';
 import {NavigationContainer} from "@react-navigation/native";
 import {createStackNavigator} from "@react-navigation/stack";
 import Home from './screens/Home';
 import Setting from './screens/Setting';
 import Dogus from './screens/Dogus';
 const Stack = createStackNavigator();

 function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={{uri:'https://pbs.twimg.com/profile_images/1414913380696084480/rtk20Wp4_400x400.jpg',}}
      />
    );
  }
  
 const Route = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:'#f4511e',},
          headerTintColor:'#fff',
         }}/>
        <Stack.Screen name="Setting" component={Setting} options={{
           headerTitle:  (props) => <LogoTitle {...props} /> ,
           headerRight: ()=> (
             <Button
             onPress={()=> alert('Basma Demiştim')}
             title='BASMAYIN'
             color='red'
             />
           ),
        }}/>
        <Stack.Screen name="Dogusun Ekranı" component={Dogus}/>
      </Stack.Navigator>
    );
  }
  export default Route;