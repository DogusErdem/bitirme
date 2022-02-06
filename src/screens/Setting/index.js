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
 
 function Setting ({route,navigation}){
    const { id, name } = route.params;
    React.useEffect(
     () => navigation.addListener('focus', () => alert('AYARLARDASINIZ')),
     []
   );
    return(
      <View style={style.style1}>
      <Text>name:{JSON.stringify(name)}</Text>
      <Button
      title='Go to Home'
      onPress={()=> navigation.navigate('Home')}
      />
      <Button
      title='Go to Back'
      onPress={()=> navigation.goBack('Home')}
      />
        </View>
    )
  }
  const style = StyleSheet.create({
    style1 :{flex:1,alignItems:'center',justifyContent:'center'}
  });


  export default Setting;
