import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e02041',
        paddingTop: Constants.statusBarHeight + 20
    
    },

    arrow:{
        marginLeft:12,
        marginRight: 10
    },

    edit:{
        marginRight:12
    },

    perfil:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center'
    },

    body:{
        backgroundColor: '#f4f4f4',
        marginLeft: 25,
        alignItems:'center'
    },

    imgperfil:{
            marginTop:15,
            alignSelf: 'center'
    },

    nametext:{
        color:'#000',
        marginTop:30
    },

    agetext:{
        color:'#000',
        marginTop:20
    },

    emailtext:{
        color:'#000',
        marginTop:20
    },

    citytext:{
        color:'#000',
        marginTop:20
    },

    whatsapptext:{
        color:'#000',
        marginTop:20
    },

    instrumenttext:{
        color:'#000',
        marginTop:20
    },

    passwordtext:{
        color:'#000',
        marginTop:20
    },

    biotext:{
        color:'#000',
        marginTop:20
    },

    btnband:{
        height: 45,
        width:230,
        alignSelf: 'center',
        backgroundColor: '#e02041',
        borderRadius: 8,
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    btnBandText:{
        color:'#fff',
        fontSize:15,
        fontWeight: 'bold'
    },

    btnevent:{
        height: 45,
        width:230,
        alignSelf: 'center',
        backgroundColor: '#e02041',
        borderRadius: 8,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    btnEventText:{
        color:'#fff',
        fontSize:15,
        fontWeight: 'bold'
    }

})