import React,{useState} from 'react';
 import {
   ScrollView,
   StyleSheet,
   Image,
   Text,
   View,
   SafeAreaView,
   TextInput,
   TouchableOpacity,
 } from 'react-native';

   import hastane from '../../../hastane.json'
   import MapView from "react-native-map-clustering";
   import {Marker} from 'react-native-maps';
 function Harita ({navigation}){
     return(
        <SafeAreaView style={{flex:1}}>
           <MapView style={{height:750}}
           initialRegion={{
             latitude: 39.1062061,
             longitude: 31.7428407,
             latitudeDelta: 8,
             longitudeDelta: 8,
           }}
           >
             {hastane.data.map(item =>{
               if(typeof item.latitude != 'object'){
                 return <Marker
                 title={item.ad}
                 description={item.sehir}
                 coordinate={{latitude:item.longitude,longitude:item.latitude}}
                 >
            <View style={{width:36,height:36,justifyContent:'center',alignItems:'center',borderRadius:50}}>
            
            </View>  
                 </Marker>
               }}
             )
             }
              </MapView> 
        </SafeAreaView>

     )
 }
 const styles = StyleSheet.create({
   container: {
     ...StyleSheet.absoluteFillObject,
     height: 400,
     width: 400,
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
   map: {
     ...StyleSheet.absoluteFillObject,
   },
  });
 export default Harita;