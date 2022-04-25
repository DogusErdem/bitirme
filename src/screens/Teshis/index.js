import React,{useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Image,
   Text,
   Button,
   View,
   TextInput,
   TouchableOpacity,
   ImageBackground,
   ToastAndroid
 } from 'react-native';
import { useEffect } from 'react';

    import teshis from '../../../hastalik.json'
import { create } from 'react-test-renderer';

 function Teshis({navigation}){
    //   useEffect(() => { 
    //       console.log(teshis.Burun['Burun kanaması'].Lösemi)
    //   })
      const image =require('../../../assets/images/kalp.png')
      const akciger =require('../../../assets/images/akciger.png')
      const mide =require('../../../assets/images/mide.png')
      const böbrek =require('../../../assets/images/böbrek.png')
      const göz =require('../../../assets/images/göz.png')
      const agız =require('../../../assets/images/agız.png')
      const burun =require('../../../assets/images/burun.png')
      const kafa =require('../../../assets/images/kafa.png')
      const bogaz =require('../../../assets/images/bogaz.png')
      const ortapedi =require('../../../assets/images/ortapedi.png')
     
     return(
         <ScrollView style={{backgroundColor:'white'}}>
             
             <Text style={style.text_style}>Şikayetinizin olduğu organınızı seçiniz.</Text>
             

        <View style={style.positions}>
        <TouchableOpacity style={style.item}>
          <Image source={image} style={style.image} />
          <Text style={style.text_style}>KALP</Text>
       </TouchableOpacity>

       <TouchableOpacity style={style.item}>
          <Image source={akciger} style={style.image} />
          <Text style={style.text_style}>AKCİĞER</Text>
       </TouchableOpacity>
       </View>

       <View style={style.positions}>
        <TouchableOpacity style={style.item}>
          <Image source={mide} style={style.image} />
          <Text style={style.text_style}>MİDE</Text>

       </TouchableOpacity>
       <TouchableOpacity style={style.item}>
          <Image source={böbrek} style={style.image} />
          <Text style={style.text_style}>BÖBREK</Text>
       </TouchableOpacity>
       </View>
       
       <View style={style.positions}>
        <TouchableOpacity style={style.item}>
          <Image source={göz} style={style.image} />
          <Text style={style.text_style}>GÖZ</Text>
       </TouchableOpacity>

       <TouchableOpacity style={style.item}>
          <Image source={agız} style={style.image} />
          <Text style={style.text_style}>AĞIZ VE DİŞ</Text>
       </TouchableOpacity>
       </View>
       <View style={style.positions}>
        <TouchableOpacity style={style.item}>
          <Image source={burun} style={style.image} />
          <Text style={style.text_style}>BURUN</Text>
       </TouchableOpacity>

       <TouchableOpacity style={style.item}>
          <Image source={kafa} style={style.image} />
          <Text style={style.text_style}>KAFA</Text>
       </TouchableOpacity>
       </View>

       <View style={style.positions}>
        <TouchableOpacity style={style.item}>
          <Image source={bogaz} style={style.image} />
          <Text style={style.text_style}>BOĞAZ</Text>
       </TouchableOpacity>

       <TouchableOpacity style={style.item}>
          <Image source={ortapedi} style={style.image} />
          <Text style={style.text_style}>ORTAPEDİ</Text>
       </TouchableOpacity>
       </View>

         </ScrollView>
     )
 }

 const style = StyleSheet.create({
    text_style:{
        fontSize:15,
        fontWeight:'700',
        color:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    item:{
      width:190,
      height:190,
      padding:10,
      borderWidth:0,
      marginTop:25,
      borderColor:'#D3D3D3',
      justifyContent:'center',
      alignItems:'center',
    },
    image:{
        marginBottom:10,
        width:130,
        height:130
      },
      positions:{
        flexDirection:'row',
        justifyContent:'space-around',
     } 
 })
 export default Teshis;