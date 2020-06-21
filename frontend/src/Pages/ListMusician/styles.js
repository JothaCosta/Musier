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

    infomusician:{
        flexDirection: 'column',
    },

    nameText:{
        flexDirection: 'row'
    },  

    ageText:{
        flexDirection: 'row'
    },  
    whatsapp:{
        marginBottom: 20
    }
})