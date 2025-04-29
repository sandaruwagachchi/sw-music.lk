import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

const SongCard = ({ song, containerStyle, imageStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity>
        <Image source={{ uri: song.artwork }} style={[styles.coverImage, imageStyle]} />
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SongCard;
