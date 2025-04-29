import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import SongCard from './SongCard'

const SongList = () => {
  return (
    <View>
      <Text style={styles.text}>Recommended for you</Text>
      <FlatList 
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} 
        renderItem={({ item }) => <SongCard item={item} />} 
        horizontal={true} 
        ItemSeparatorComponent={() => <View style={{ marginHorizontal: 3 }} />} 
      />
    </View>
  )
}

export default SongList
