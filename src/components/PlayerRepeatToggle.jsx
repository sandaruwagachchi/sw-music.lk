import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const PlayerRepeatToggle = () => {
  return (
    <View>
     <TouchableOpacity>
        <FontAwesome6 name={'repeat'} size={25}/>
     </TouchableOpacity>
    </View>
  )
}

export default PlayerRepeatToggle