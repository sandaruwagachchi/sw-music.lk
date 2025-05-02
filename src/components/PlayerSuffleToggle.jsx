import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import TrackPlayer from 'react-native-track-player'

const PlayerSuffleToggle = () => {
  const suffleSongs = async () => {
    let queue = await TrackPlayer.getQueue();
    await TrackPlayer.reset();
    queue.sort(() => Math.random() - 0.5);
    await TrackPlayer.add(queue);
    await TrackPlayer.play();
  }
  return (
    <View>
      <TouchableOpacity onPress={suffleSongs}>
        <Entypo name={'shuffle'} size={25} color={'#BF5700'}/>
      </TouchableOpacity>
    </View>
  )
}

export default PlayerSuffleToggle