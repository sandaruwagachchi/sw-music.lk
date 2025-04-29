import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SongCard from '../../components/SongCard';
import FlotingPlayer from '../../components/FlotingPlayer';
import { useNavigation } from '@react-navigation/native';

const LikeScreen = () => {
  const navigation = useNavigation();
   const toggleDrawer = ()=>{
     navigation.toggleDrawer();
   }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign name={'left'}  color={'#FF0266'} size={25}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name={'equalizer-outline'} color={'#FF0266'} size={25}/>
      </TouchableOpacity>
    </View>
    <Text style={styles.title}>
        Liked Songs
    </Text>
    <FlatList data ={[1,2, 3, 4, 5, 6, 7, 8, 9]}
     renderItem={()=> <SongCard containerStyle = {{width:'47%'}} imageStyle={{
        height: 160,
        width: 160
     }}/>}
     numColumns={2}
     contentContainerStyle={{
        paddingBottom:500,
        paddingHorizontal:20
     }}
     columnWrapperStyle={{
        justifyContent:'space-between',
        marginVertical:10
     }}
     />
     <FlotingPlayer/>
      </SafeAreaView>
  )
}

export default LikeScreen