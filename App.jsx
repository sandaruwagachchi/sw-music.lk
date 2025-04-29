
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './src/Navigation/DrawerNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
   <DrawerNavigation/>
  </NavigationContainer>
  </GestureHandlerRootView>
  )
}

export default App