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
        justifyContent: 'space-between'    
    },

    registerband:{
        paddingHorizontal: 105,
        fontSize:18,
        color: '#fff',
        fontWeight: 'bold'
    },

    imgperfil:{
        marginTop:35,
        alignSelf: 'center'
         
    },

    nametext:{
        color:'#fff',
        marginTop:35
    },

    styletext:{
        color:'#fff',
        marginTop:25
    },

    biotext:{
        color:'#fff',
        marginTop:25
    },

    name:{
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 15,
    },

    style:{
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
        marginTop: 8,
        paddingHorizontal: 15,
    },

    btnpublish:{
        height: 45,
        width:230,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    btnpublishText:{
        color:'#e02041',
        fontSize:15,
        fontWeight: 'bold'
    }



})