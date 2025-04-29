import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from './PlayerControls';
import { useSharedValue } from 'react-native-reanimated';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const imageUrl = "https://linkstorage.linkfire.com/medialinks/images/ae50fe5a-9c55-4307-ab83-14bbfc03372d/artwork-440x440.jpg";

const FlotingPlayer = () => {
  const navigation = useNavigation();
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);

  const handleOpenPlayerScreen = ()=>{
    navigation.navigate('Player');
  }

  return (
    <View>
      <View>
        <Slider
          style={{ width: '100%', height: 10, marginTop:8 }}
          value={progress.value}
          minimumValue={min.value}
          maximumValue={max.value}
          minimumTrackTintColor="#FF0266"
          maximumTrackTintColor='gray'
          thumbTintColor='#FF0266'
        />
      </View>
      <TouchableOpacity style={styles.flotingPlayeContainer} activeOpacity={0.85} onPress={handleOpenPlayerScreen}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.songTitle}>Monster Go Home</Text>
          <Text style={styles.songArtist}>Alan Walker</Text>
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
