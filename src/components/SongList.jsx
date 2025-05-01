import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import SongCard from './SongCard';
import TrackPlayer from 'react-native-track-player';

const SongList = ({ item }) => {
  const { setCurrentSong } = useContext(PlayerContext);

  const handlePlayTrack = async (selectedTrack) => {
    setCurrentSong(selectedTrack);

    const songs = item.songs;
    const trackIndex = songs.findIndex(
      (track) => track.url === selectedTrack.url
    );

    if (trackIndex === -1) return;

    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);

    await TrackPlayer.reset();
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);
    await TrackPlayer.play();
  };

  return (
    <View>
      <Text style={styles.text}>{item.title}</Text>
      <FlatList
        data={item.songs}
        renderItem={({ item }) => (
          <SongCard
            song={item}
            handlePlay={(selectedTrack) => handlePlayTrack(selectedTrack)}
          />
        )}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ marginHorizontal: 4 }} />}
      />
    </View>
  );
};

export default SongList;
