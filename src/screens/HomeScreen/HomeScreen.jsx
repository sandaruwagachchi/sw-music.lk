import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import SongList from '../../components/SongList';
import FlotingPlayer from '../../components/FlotingPlayer';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome6 name={'bars-staggered'} color={'#FF0266'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name={'search'} color={'#FF0266'} size={25} />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={[1, 2, 3, 4, 5]} 
        renderItem={({ item }) => <SongList songId={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <FlotingPlayer />
    </SafeAreaView>
  );
};

export default HomeScreen;
