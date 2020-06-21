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

    registerevent:{
        paddingHorizontal: 110,
        fontSize:18,
        color: '#fff',
        fontWeight: 'bold'
    },

    imgperfil:{
        marginTop:25,
        alignSelf: 'center'
         
    },

    nametext:{
        color:'#fff',
        marginTop:20
    },

    citytext:{
        color:'#fff',
        marginTop:20
    },

    biotext:{
        color:'#fff',
        marginTop:20
    },

    linktext:{
        color:'#fff',
        marginTop:20
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

    link:{
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 15,
    },

    btnpublish:{
        height: 45,
        width:230,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    btnPublishText:{
        color:'#e02041',
        fontSize:15,
        fontWeight: 'bold'
    }



})