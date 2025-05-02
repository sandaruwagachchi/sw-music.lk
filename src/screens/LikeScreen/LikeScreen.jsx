import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SongCard from '../../components/SongCard';
import FlotingPlayer from '../../components/FlotingPlayer';
import { useNavigation } from '@react-navigation/native';
import useLikeSongs from '../../store/likeStore';
import TrackPlayer from 'react-native-track-player';

const LikeScreen = () => {
  const { likedSongs } = useLikeSongs();
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const handlePlayTrack = async (selectedTrack) => {
    const songs = likedSongs;
    const trackIndex = songs.findIndex((track) => track.url === selectedTrack.url);
    if (trackIndex === -1) return;
  
    await TrackPlayer.reset(); 
  
    await TrackPlayer.add(songs); 
  
    await TrackPlayer.skip(trackIndex); 
  
    await TrackPlayer.play(); 
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign name={'left'} color={'#BF5700'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name={'equalizer-outline'} color={'#BF5700'} size={25} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Liked Songs</Text>

      <FlatList
        data={likedSongs}
        renderItem={({ item }) => (
          <SongCard
            song={item}
            containerStyle={{ width: '47%' }}
            imageStyle={{ height: 160, width: 160 }}
            handlePlay={() => handlePlayTrack(item)}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 500,
          paddingHorizontal: 20,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 50, color: '#aaa' }}>
            No liked songs yet.
          </Text>
        }
      />

      <FlotingPlayer />
    </SafeAreaView>
  );
};

export default LikeScreen;
