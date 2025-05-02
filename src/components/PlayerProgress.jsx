import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import styles from './styles';
import { formatSecondsToMinute } from '../utilits';

const PlayerProgress = () => {
  const { duration, position } = useProgress();
  const [sliderValue, setSliderValue] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleSlidingStart = () => {
    setIsSliding(true);
  };

  const handleValueChange = (value) => {
    setSliderValue(value);
  };

  const handleSlidingComplete = async (value) => {
    const seekPosition = value * duration;
    await TrackPlayer.seekTo(seekPosition);
    setIsSliding(false);
  };

  const progressValue = isSliding ? sliderValue : position / duration;

  return (
    <View>
      <View style={styles.timeRow}>
        <Text>{formatSecondsToMinute(position)}</Text>
        <Text>-{formatSecondsToMinute(duration - position)}</Text>
      </View>
      <Slider
        style={{ width: 385, height: 40 }}
        value={progressValue}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#BF5700"
        maximumTrackTintColor="gray"
        thumbTintColor="#BF5700"
        onSlidingStart={handleSlidingStart}
        onValueChange={handleValueChange}
        onSlidingComplete={handleSlidingComplete}
      />
    </View>
  );
};

export default PlayerProgress;
