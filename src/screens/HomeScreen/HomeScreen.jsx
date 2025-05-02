import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import SongList from '../../components/SongList';
import FlotingPlayer from '../../components/FlotingPlayer';
import { useNavigation } from '@react-navigation/native';
import { songsCategory } from '../../data/songsCategory';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome6 name="bars-staggered" color="#BF5700" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="search" color="#BF5700" size={25} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={songsCategory}
        renderItem={({ item }) => <SongList item={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <FlotingPlayer />
    </SafeAreaView>
  );
};

export default HomeScreen;
