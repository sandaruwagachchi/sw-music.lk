import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/Navigation/DrawerNavigation';
import { PlayerProvider } from './src/context/PlayerContext';
import { setupPlayer } from 'react-native-track-player/lib/src/trackPlayer';
import TrackPlayer from 'react-native-track-player';
import { useSetupPlayer } from './src/hooks/useSetupTrackPlayer';
import useLikeSongs from './src/store/likeStore';
import { darkTheme } from './src/theme/darkTheme';

const App = () => {
  const {loadLikeSongs} = useLikeSongs();
  useEffect(()=>{
    loadLikeSongs();
  }, []);
  const onLoad = () =>{
    console.log("Track player setup");
  }
useSetupPlayer({onLoad});
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PlayerProvider>
        <NavigationContainer theme={darkTheme}>
          <DrawerNavigation />
        </NavigationContainer>
      </PlayerProvider>
    </GestureHandlerRootView>
  );
};

export default App;
