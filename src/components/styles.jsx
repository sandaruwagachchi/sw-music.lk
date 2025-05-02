import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container:{
    
    marginBottom:40
},
coverImage:{
    width:250,
    height:250,
    borderRadius:10,
    borderColor:'#BF5700',
    borderWidth:1
},
title:{
    color:'#BF5700',
    textAlign:'center',
    fontFamily: 'Abril Fatface serif',
    fontSize:20,
    paddingVertical:5,
    fontWeight:'bold'
},
artist:{
    color:'gray',
    textAlign:'center',
    fontSize:15,
    fontFamily: 'Abril Fatface serif',
    fontWeight:'light'
},
text:{
    color:'#BF5700',
    fontSize:30,
    fontWeight:'bold',
    padding:5,
    marginBottom:5,
    fontFamily: 'Abril Fatface serif',

  },
  image:{
    width:50,
    height:50,
    marginVertical:5,
    borderRadius:10
  },
  flotingPlayeContainer:{
   justifyContent:'space-between',
   alignItems:'center',
   flexDirection:'row'
  },
  titleContainer:{
     flex:1,
     marginLeft:10,
     gap:2
  },
  songTitle:{
    color:'#BF5700',
    fontSize:20,
    fontFamily: 'Abril Fatface serif',
    fontWeight:'bold'
  },
  songArtist:{
    color:'gray',
    fontFamily: 'Abril Fatface serif',
  },
  playerControlContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:30,
    marginRight:15
  },
  timeRow:{
    opacity:0.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'20',
    paddingHorizontal:10,
    marginLeft:5
  }
})
export default styles

