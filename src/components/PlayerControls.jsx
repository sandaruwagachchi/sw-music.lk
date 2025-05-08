import React, { useContext, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import TrackPlayer, {
  State,
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
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
      <FontAwesome6 name={'backward'} size={30} color={'#BF5700'} />
    </TouchableOpacity>
  );
};


export const PlayPauseButton = () => {
  const [playbackState, setPlaybackState] = useState(State.None);

 
  useTrackPlayerEvents([Event.PlaybackState], async (event) => {
    if (event.state !== undefined) {
      setPlaybackState(event.state);
    }
  });

  const togglePlayback = async () => {
    try {
      const currentState = await TrackPlayer.getState();
      if (currentState === State.Playing || currentState === State.Buffering) {
        await TrackPlayer.pause();
      } else if (
        currentState === State.Paused ||
        currentState === State.Ready ||
        currentState === State.Stopped
      ) {
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Error toggling playback:', error);
    }
  };

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
        size={30}
        color={'#BF5700'}
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
        setCurrentSong(trackObject);
      }
    } catch (error) {
      console.error('Error going to next track:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handleNext} activeOpacity={0.85}>
      <FontAwesome6 name={'forward'} size={30} color={'#BF5700'} />
    </TouchableOpacity>
  );
};


export const PlayerControls = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <GoToPreviousButton />
      <PlayPauseButton />
      <GoToNextButton />
    </View>
  );
};
