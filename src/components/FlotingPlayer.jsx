import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from './PlayerControls';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { PlayerContext } from '../context/PlayerContext';
import TrackPlayer, { usePlaybackState, State, useActiveTrack } from 'react-native-track-player';

const FlotingPlayer = () => {
  const navigation = useNavigation();
  const { currentSong } = useContext(PlayerContext);
  const playbackState = usePlaybackState();
  const [sliderValue, setSliderValue] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const activeTrack = useActiveTrack();

  useEffect(() => {
    const setupPlayer = async () => {
      if (currentSong) {
        try {
          await TrackPlayer.setupPlayer();
          await TrackPlayer.reset();
          await TrackPlayer.add(currentSong);
          await TrackPlayer.play();
        } catch (error) {
          console.error('Error setting up TrackPlayer:', error);
        }
      }
    };

    setupPlayer();

    const interval = setInterval(async () => {
      const currentPosition = await TrackPlayer.getPosition();
      const currentDuration = await TrackPlayer.getDuration();
      setPosition(currentPosition);
      setDuration(currentDuration);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSong]);
  

  useEffect(() => {
    if (duration > 0) {
      setSliderValue(position / duration);
    } else {
      setSliderValue(0);
    }
  }, [position, duration]);
  

  if (!currentSong) return null;

  const handleOpenPlayerScreen = () => {
    navigation.navigate('Player');
  };

  const handleSliderChange = async (value) => {
    const newPosition = value * duration;
    await TrackPlayer.seekTo(newPosition);
  };

  return (
    <View>
     <Slider
  style={{ width: '100%', height: 10, marginTop: 8 }}
  value={isNaN(sliderValue) ? 0 : sliderValue}
  minimumValue={0}
  maximumValue={1}
  onValueChange={handleSliderChange}
  minimumTrackTintColor="#BF5700"
  maximumTrackTintColor="gray"
  thumbTintColor="#BF5700"
/>

      <TouchableOpacity
        style={styles.flotingPlayeContainer}
        activeOpacity={0.85}
        onPress={handleOpenPlayerScreen}
      >
        <Image source={{ uri: activeTrack?.artwork }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.songTitle}>{activeTrack?.title}</Text>
          <Text style={styles.songArtist}>{activeTrack?.artist}</Text>
        </View>
        <View style={styles.playerControlContainer}>
          <GoToPreviousButton />
          <PlayPauseButton />
          <GoToNextButton />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FlotingPlayer;
