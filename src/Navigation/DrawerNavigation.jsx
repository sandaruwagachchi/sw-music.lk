import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import CustomDrawerContent from './CustomDrawerContent';
import LikeScreen from '../screens/LikeScreen/LikeScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false,
     drawerActiveBackgroundColor: '#FF0266',
     drawerActiveTintColor: 'white',
     backgroundColor: 'gray'}}
     drawerContent={(props) => <CustomDrawerContent {...props}/>}>
    <Drawer.Screen name="Home" component={StackNavigation} />
    <Drawer.Screen name="Like" component={LikeScreen} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation