
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
    <StackNavigation/>
  </NavigationContainer>
  </GestureHandlerRootView>
  )
}

export default App