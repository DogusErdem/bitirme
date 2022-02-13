import React,{Component} from 'react';
 import {
   ScrollView,
   StyleSheet,
   Image,
   Text,
   View,
   TouchableOpacity
 } from 'react-native';
 
 function Home ({navigation}){
       
    return(
      
      <ScrollView style={style.body}>
        <View style={style.logo_area}>
          <Image style={{width:300,height:300}} source={require('../../../assets/images/home.png')}/> 
          </View>
          <View>
          <View style={style.item}>
            <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('Giris')}>
              <Text style={style.title}>GİRİŞ YAP</Text>
            </TouchableOpacity>
          </View>
          <View style={style.item}>
            <TouchableOpacity style={style.button} onPress={()=>navigation.navigate('Kayit')}>
              <Text style={style.title}>KAYIT OL</Text>
            </TouchableOpacity>
          </View>
          <View style={style.item}>
            <TouchableOpacity style={style.button}>
              <Text style={style.title}>MİSAFİR OLARAK DEVAM ET</Text>
            </TouchableOpacity>
          </View>
          <View style={style.item}>
            <TouchableOpacity style={style.button} onPress={()=> navigation.navigate('Harita')}>
              <Text style={style.title}>ÇEVREMDEKİ HASTANELER</Text>
            </TouchableOpacity>
          </View>
          <View style={style.item}>
            <TouchableOpacity style={style.button}>
              <Text style={style.title}>ÇEVREMDEKİ NÖBETÇİ ECZANELER</Text>
            </TouchableOpacity>
          </View>
          
          </View>
      </ScrollView>
     
    )
    }

    const style = StyleSheet.create({
      logo_area:{justifyContent:'center',alignItems:'center',marginTop:15},
      body:{backgroundColor:'#fff',flex:1},
      item:{marginTop:10},
      title:{color:'#fff',alignItems:'center',fontSize:15,fontWeight:'700'},
      button:{marginTop:13,backgroundColor:'#ff0000',paddingVertical:15,borderRadius:10,borderColor:'#B0B0C3',borderWidth:1,alignItems:'center',justifyContent:'center'}
    })
  export default Home;
