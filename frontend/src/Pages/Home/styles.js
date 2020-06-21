import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#e02041',
        paddingTop: Constants.statusBarHeight + 20
        

    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    home:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },

    logout:{
        marginLeft: 15
    },

    user:{
        marginRight: 15
    },  

    body:{
        backgroundColor: '#f4f4f4',
        alignItems: 'center'
    },

    textmusician:{
        marginTop: 12,
        fontSize: 16,
        fontWeight:'bold'
    },

    textband:{
        marginTop: 12,
        fontSize: 16,
        fontWeight:'bold'
    },

    textevent:{
        marginTop: 12,
        marginBottom: 4,
        fontSize: 16,
        fontWeight:'bold'
    },

    imgmusician:{
        borderRadius: 8,  
        marginTop: 5    
    },

    imgband:{
        borderRadius: 8, 
        marginTop: 5   
    },

    imgevent:{
        borderRadius: 8,
        marginTop: 5, 
    },

    


    

})