import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CustomDrawerContent = (props) => {
    const isDark =false;
  return (
   <DrawerContentScrollView  style={styles.container}>
    <View style={styles.headerContainer}>
        <TouchableOpacity  onPress={() => props.navigation.navigate('Home')}>
            <Ionicons name={'close-sharp'} size={30} color={'#BF5700'}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name={isDark ? 'moon':'sunny'} size={30} color={'#BF5700'}/>
        </TouchableOpacity>
    </View>
    <View style={styles.draweItemsContainer}>
      <DrawerItem label={'Profile'}  labelStyle={styles.labelStyle} icon={()=>(
        <Fontisto name={'user-secret'} size={25} color={'#BF5700'}/>
      )}/>  
      <DrawerItem label={'Liked Songs'} labelStyle={styles.labelStyle} onPress={()=>{
        props.navigation.navigate('Like')
      }} icon={()=>(
        <AntDesign name={'heart'} size={25} color={'#BF5700'}/>
      )}/> 
      <DrawerItem label={'Language'}  labelStyle={styles.labelStyle} icon={()=>(
        <MaterialIcons name={'language'} size={25} color={'#BF5700'}/>
      )}/>  
      <DrawerItem label={'Contact Us'}  labelStyle={styles.labelStyle} icon={()=>(
        <MaterialIcons name={'contacts'} size={25} color={'#BF5700'}/>
      )}/>  
      <DrawerItem label={'FAQs'}  labelStyle={styles.labelStyle} icon={()=>(
        <MaterialIcons name={'tips-and-updates'} size={25} color={'#BF5700'}/>
      )}/>  
      <DrawerItem label={'Settings'}  labelStyle={styles.labelStyle} icon={()=>(
        <MaterialIcons name={'settings'} size={25} color={'#BF5700'}/>
      )}/>   
    </View>
   </DrawerContentScrollView>
  )
}

export default CustomDrawerContent