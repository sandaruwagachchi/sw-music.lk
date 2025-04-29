import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const PlayerSuffleToggle = () => {
  return (
    <View>
      <TouchableOpacity>
        <Entypo name={'shuffle'} size={25}/>
      </TouchableOpacity>
    </View>
  )
}

export default PlayerSuffleToggle