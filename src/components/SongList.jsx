import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import SongCard from './SongCard'

const SongList = ({item}) => {
  return (
    <View>
      <Text style={styles.text}>{item.title}</Text>
     <FlatList
  data={item.songs}
  renderItem={({ item }) => <SongCard song={item} />}
  horizontal
  keyExtractor={(item, index) => index.toString()}
  ItemSeparatorComponent={() => <View style={{ marginHorizontal: 4  }} />} 
/>

    </View>
  )
}

export default SongList
