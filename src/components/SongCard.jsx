import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const SongCard = ({ song, containerStyle, imageStyle, handlePlay }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={() => handlePlay(song)}>
        <Image source={{ uri: song.artwork }} style={[styles.coverImage, imageStyle]} />
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SongCard;
