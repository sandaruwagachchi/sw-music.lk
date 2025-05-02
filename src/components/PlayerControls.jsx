import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import TrackPlayer, { usePlaybackState, State, useProgress } from 'react-native-track-player';
import { PlayerContext } from '../context/PlayerContext';

export const GoToPreviousButton = () => {
  const { setCurrentSong } = useContext(PlayerContext);

  const handlePrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
      const track = await TrackPlayer.getCurrentTrack();
      if (track !== null) {
        const trackObject = await TrackPlayer.getTrack(track);
        setCurrentSong(trackObject);
      }
    } catch (error) {
      console.error('Error going to previous track:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePrevious} activeOpacity={0.85}>
      <FontAwesome6 name={'backward'} size={24} color={'black'} />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const togglePlayback = async () => {
    try {
      const currentState = await TrackPlayer.getState();
      
      if (currentState === State.Playing || currentState === State.Buffering) {
        await TrackPlayer.pause();
      } else if (currentState === State.Paused || currentState === State.Ready || currentState === State.Stopped) {
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Error toggling playback:', error);
    }
  };

  // Determine the correct icon based on playback state
  const getPlayPauseIcon = () => {
    switch (playbackState) {
      case State.Playing:
      case State.Buffering:
        return 'pause';
      default:
        return 'play';
    }
  };

  return (
    <TouchableOpacity onPress={togglePlayback} activeOpacity={0.85}>
      <FontAwesome6
        name={getPlayPauseIcon()}
        size={25}
        color={'black'}
      />
    </TouchableOpacity>
  );
};

export const GoToNextButton = () => {
  const { setCurrentSong } = useContext(PlayerContext);

  const handleNext = async () => {
    try {
      await TrackPlayer.skipToNext();
      const track = await TrackPlayer.getCurrentTrack();
      if (track !== null) {
        const trackObject = await TrackPlayer.getTrack(track);
        setCurrentSong(trackObject); // 🔁 Update currentSong to refresh UI
      }
    } catch (error) {
      console.error('Error going to next track:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handleNext} activeOpacity={0.85}>
      <FontAwesome6 name={'forward'} size={24} color={'black'} />
    </TouchableOpacity>
  );
};


// Optional: Combined Player Controls Component
export const PlayerControls = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 20 }}>
      <GoToPreviousButton />
      <PlayPauseButton />
      <GoToNextButton />
    </View>
  );
};