import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';


const imageUrl = "https://linkstorage.linkfire.com/medialinks/images/ae50fe5a-9c55-4307-ab83-14bbfc03372d/artwork-440x440.jpg";

const SongCard = ({containerStyle, imageStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
     <TouchableOpacity>
     <Image source={{uri:imageUrl}} style={[styles.coverImage, imageStyle]}/>
     <Text style={styles.title}>Monster Go Home</Text>
     <Text style={styles.artist}>Alen Walker</Text>
     </TouchableOpacity>
    </View>
  )
}

export default SongCard