import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import PlayerRepeatToggle from '../../components/PlayerRepeatToggle';
import PlayerSuffleToggle from '../../components/PlayerSuffleToggle';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PlayerProgress from '../../components/PlayerProgress';
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from '../../components/PlayerControls';
import TrackPlayer, { useActiveTrack } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import useLikeSongs from '../../store/likeStore';
import { isExist } from '../../utilits';

const PlayerScreen = () => {
  const {likedSongs,addToLiked} = useLikeSongs();
  const navigation = useNavigation();
  const activeTrack = useActiveTrack();
  const isLiked = false;
  const imageUri = activeTrack?.artwork || "https://default.com/fallback.jpg";
  const goBack = () =>{
    navigation.goBack();
  }
  const [isMute, setIsMute] = useState(false);
  const handleToggleVolume = () => {
    TrackPlayer.setVolume(isMute ? 1 : 0)
    setIsMute(!isMute);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <AntDesign name={'left'} color={'#BF5700'} size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Playing Now</Text>
      </View>

      <Image source={{ uri: imageUri }} style={styles.coverImage} />
        <View style={styles.heartContainer}>
        <TouchableOpacity onPress={() => addToLiked(activeTrack)}>
  <FontAwesome name={isExist(likedSongs, activeTrack) ? 'heart' : 'heart-o'} size={25} color={'#BF5700'} />
</TouchableOpacity>

      </View>
      <View style={styles.content}>
          <Text style={styles.text}>{activeTrack?.title || 'Unknown Title'}</Text>
          <Text style={styles.artist}>{activeTrack?.artist || 'Unknown Artist'}</Text>
        </View>

      <View style={styles.controller}>
        <TouchableOpacity onPress={handleToggleVolume}>
          <FontAwesome6 name={isMute ? 'volume-xmark' : 'volume-low'} size={25} color={'#BF5700'} />
        </TouchableOpacity>
        <View style={styles.repeat}>
          <PlayerRepeatToggle />
        </View>
        <View style={styles.suffle}>
          <PlayerSuffleToggle />
        </View>
      </View>

      <PlayerProgress />
      <View style={styles.playerControlContainer}>
        <GoToPreviousButton />
        <PlayPauseButton />
        <GoToNextButton />
      </View>
    </SafeAreaView>
  );
};

export default PlayerScreen