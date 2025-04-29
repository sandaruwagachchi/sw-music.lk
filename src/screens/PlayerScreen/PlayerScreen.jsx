import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import PlayerRepeatToggle from '../../components/PlayerRepeatToggle';
import PlayerSuffleToggle from '../../components/PlayerSuffleToggle';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PlayerProgress from '../../components/PlayerProgress';
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from '../../components/PlayerControls';

const PlayerScreen = () => {
    const isLiked = false;
    const isMuted = false;
    const imageUri="https://linkstorage.linkfire.com/medialinks/images/60ea963f-471f-4dd0-99a6-c212457cea1b/artwork-440x440.jpg"
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
    <TouchableOpacity>
         <AntDesign name={'left'}  color={'#FF0266'} size={25} />
    </TouchableOpacity>
    <Text style={styles.title}>Playing Now</Text>
        </View>
      <Image source={{uri:imageUri}} style={styles.coverImage}/>
     <View style={styles.heartContainer}>
     <View style={styles.content}>
        <Text style={styles.text}>Believer</Text>
        <Text style={styles.artist}>Imagine Dragon</Text>
      </View>
      <View>
     <TouchableOpacity>
        <FontAwesome name={isLiked ? 'heart':'heart-o'} size={25}/>
     </TouchableOpacity>
      </View>
     </View>
     <View style={styles.controller}>
        <TouchableOpacity>
            <FontAwesome6 name={isMuted ?'volume-xmark' : 'volume-low'} size={25} />
        </TouchableOpacity>
        <View style={styles.repeat}>
           <PlayerRepeatToggle/>
        </View>
        <View style={styles.suffle}>
            <PlayerSuffleToggle/>
        </View>
      </View>
      <PlayerProgress/>
      <View style={styles.playerControlContainer}>
          <GoToPreviousButton />
          <PlayPauseButton />
          <GoToNextButton />
        </View>
    </SafeAreaView>
  )
}

export default PlayerScreen