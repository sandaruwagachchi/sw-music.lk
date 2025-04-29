
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LikeScreen from '../screens/LikeScreen/LikeScreen';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Like" component={LikeScreen} />
    <Stack.Screen name="Player" component={PlayerScreen} />
  </Stack.Navigator>
  )
}

export default StackNavigation