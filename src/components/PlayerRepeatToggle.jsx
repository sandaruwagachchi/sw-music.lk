import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTrackPlayerRepeatMode } from '../hooks/useTrackPlayerRepeatMode';
import { RepeatMode } from 'react-native-track-player'; // ✅ ADD THIS LINE

const PlayerRepeatToggle = () => {
  const { repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode();

  if (repeatMode == null) {
    return null;
  }

  const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue];
  const currentIndex = repeatOrder.indexOf(repeatMode);
  const nextIndex = (currentIndex + 1) % repeatOrder.length;

  const toggleRepeatMode = () => {
    changeRepeatMode(repeatOrder[nextIndex]);
  };

  let iconName = 'repeat';
  switch (repeatMode) {
    case RepeatMode.Off:
      iconName = 'repeat-off';
      break;
    case RepeatMode.Queue:
      iconName = 'repeat';
      break;
    case RepeatMode.Track:
      iconName = 'repeat-once';
      break;
  }

  return (
    <TouchableOpacity onPress={toggleRepeatMode}>
      <MaterialCommunityIcons name={iconName} size={30} color="#BF5700" />
    </TouchableOpacity>
  );
};

export default PlayerRepeatToggle;
