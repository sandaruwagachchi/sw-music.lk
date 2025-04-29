 import { View, Text, TouchableOpacity } from 'react-native'
 import React from 'react'
import styles from './styles'
import Slider from '@react-native-community/slider';
import { useSharedValue } from 'react-native-reanimated';
 
 const PlayerProgress = () => {
   const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);
   return (
     <View>
       <View style={styles.timeRow}>
        <Text>00.40</Text>
        <Text>04.00</Text>
       </View>
       <Slider
         style={{width: 385, height: 40}}
         value={progress.value}
          minimumValue={min.value}
          maximumValue={max.value}
          minimumTrackTintColor="#FF0266"
          maximumTrackTintColor='gray'
          thumbTintColor='#FF0266'
       />
     </View>
   )
 }
 
 export default PlayerProgress