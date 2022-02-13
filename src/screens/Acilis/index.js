import React,{useEffect} from 'react';
 import {
   ScrollView,
   StyleSheet,
   Image,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';

 function Acilis({navigation}){
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Home')
        }, 100000);
        return () => clearTimeout(timer);
      }, []);
     return(
        <View style={{backgroundColor:'red',flex:1}}>
        
      </View>
     )
 }
 export default Acilis;

 const style= StyleSheet.create({
     body:{backgroundColor:'#ff0000',flex:1}
 })