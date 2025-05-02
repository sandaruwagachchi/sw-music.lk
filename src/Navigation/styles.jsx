import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'

    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    draweItemsContainer:{
        gap:20,
        marginTop:20,
    },
    labelStyle:{
        fontSize:22,
        color:'#DDDBCB',
        borderColor:'#BF5700',
        borderWidth:1,
        height:50,
        textAlign:'center',
        borderRadius:10,
    }
})
export default styles

