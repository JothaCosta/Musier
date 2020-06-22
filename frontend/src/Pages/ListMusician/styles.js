import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f4f4f4',
    },

    header:{
        flexDirection: 'row',
        backgroundColor: '#e02041',
        paddingTop: Constants.statusBarHeight + 20,
    
    },

    arrow:{
        marginLeft:12,
        marginRight: 50
    },

    musicianHeader:{
        marginLeft: 60,
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center'
    },

    musicianList:{
        marginTop: 35,
    },

    musician:{
        flexDirection: 'row',
        padding: 15,
        borderRadius:8,
        backgroundColor:'#e5e5e5',
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    imgmusician:{
        flexDirection: 'row',
    },

    imgperfil:{
        marginLeft:10,
        marginTop: 15
    },

    infomusician:{
        flexDirection:'column',
        marginRight:50
    },

    nameAgeText:{
        marginTop:5
    },

    citytext:{
        marginTop: 5
    },

    instrumenttext:{
        marginTop:5
    },

    biotext:{
        marginTop:5,
        marginBottom:10
    },
    whatsapp:{
        marginTop: 10,
        marginBottom: 20
    }
})