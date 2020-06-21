import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({

    container:{
        flex:1,
        paddingHorizontal:24,
        backgroundColor: '#e02041',
        paddingTop: Constants.statusBarHeight + 20
        

    },

    header:{
        flexDirection: 'row',
        
    },

    registerText:{
        paddingHorizontal: 105,
        fontSize:16,
        color: '#fff',
        fontWeight: 'bold'
    },

    emailtext:{
        marginTop: 50,
        color:'#fff'
    },

    citytext:{
        marginTop: 20,
        color:'#fff'
    },

    whatsapptext:{
        marginTop: 20,
        color:'#fff'
    },

    instrumenttext:{
        marginTop: 20,
        color:'#fff'
    },

    biotext:{
        marginTop: 20,
        color:'#fff',
    },

    email:{
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 15,
    },

    city:{
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 15,
    },

    whatsapp:{
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    
    instrument:{
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 15,
    },

    bio:{
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 15,
    },

    btnregister:{
        height: 45,
        width:230,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    btnRegisterText:{
        color:'#e02041',
        fontSize:15,
        fontWeight: 'bold'
    }

})