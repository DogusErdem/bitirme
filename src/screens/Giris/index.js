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
   ToastAndroid
 } from 'react-native';
 import Icon from "react-native-vector-icons/FontAwesome5"
 
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 
 function Giris({navigation}){
  // onPress(){
  //   ToastAndroid.show("ashgd",ToastAndroid.LONG)
  // }  
  const deneme =() => {
    alert('POST BAŞARILI')
  }
  const [hide,setHide] = useState(false)

    return (
      <ScrollView style={style.body}>
        <View style={style.logo_area}>
          <Image style={{width:250,height:250}} source={require('../../../assets/images/hospital.png')}/> 
        </View>
        <View style={style.board}>
          <Formik
            initialValues={{
              eposta:'',
              sifre:''
            }}
            onSubmit={deneme}
            validationSchema={Yup.object().shape({
              eposta:Yup.string().required("E-posta boş olamaz!"),
              sifre:Yup.string().required("Şifre boş olamaz!")
            })}
          > 
          {({values,handleSubmit,handleChange,errors}) =>(
            <View>
          <View style={style.item}>
            <TextInput style={style.input}
              onChangeText={handleChange('eposta')}
              value={values.eposta}
              placeholder='E-posta'
            />
            <Icon style={{position:'absolute',left:8,top:19}} name={'user'} size={15}/>
            {(errors.eposta)&&  <Text style={{color:'red',marginLeft:5}}>{errors.eposta}</Text>}
          </View>
          <View style={style.item}>
            <TextInput style={style.input}
              onChangeText={handleChange('sifre')}
              value={values.sifre}
              placeholder='Şifre'
              secureTextEntry={hide}
            />
            {(errors.sifre) && <Text style={{color:'red',marginLeft:5}}>{errors.sifre}</Text>}
            <Icon style={{position:'absolute',left:8,top:19}} name={'key'} size={15}/>
            <TouchableOpacity style={{position:'absolute',right:15,top:19}} onPress={()=>setHide(!hide)}>
              <Icon name={(hide) ? 'eye': 'eye-slash'} size={15}/>
            </TouchableOpacity>
          </View>
          <View style={[style.item,{flexDirection:'row',justifyContent:'flex-end'}]}>
            <TouchableOpacity>
              <Text style={{color:'black',fontSize:14}}>Şifreni mi unuttun?</Text>
            </TouchableOpacity>
          </View>
          <View style={style.item}>
            <TouchableOpacity style={style.button} onPress={handleSubmit}>
              <Text style={{color:'#FFF',fontWeight:'700'}} >GİRİŞ</Text>
            </TouchableOpacity>
          </View>
          </View>)
          }
          </Formik>

          
          <View style={[style.item,{alignItems:'center'}]}>
            <Text>Hala hesabınız yok mu?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Kayit')}>
              <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>Kayıt için tıklayın.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
  );
}
const style= StyleSheet.create({
  body:{backgroundColor:'#FFF',flex:1},
  header:{padding:20,justifyContent:'center',alignItems:'center'},
  title:{fontSize:25,fontWeight:'700',color:'#D85172'},
  board:{marginTop:30,paddingHorizontal:30},
  logo_area:{justifyContent:'center',alignItems:'center',marginTop:15},
  item:{marginTop:20,position:'relative'},
  button:{marginTop:15,backgroundColor:'#D85172',paddingVertical:18,borderRadius:10,borderColor:'#B0B0C3',borderWidth:1,alignItems:'center',justifyContent:'center'},
  input:{backgroundColor:'#F7F7F7',paddingVertical:10,paddingHorizontal:30,height:55,borderRadius:10,borderColor:'#B0B0C3',borderWidth:1}

})

export default Giris;