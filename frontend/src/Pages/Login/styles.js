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
        justifyContent: 'center',
        alignItems:'center'
    },

    login:{
        marginTop:50,
        color: '#fff'
    },

    password:{
        marginTop:30,
        color: '#fff'
    },

    inputlogin:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    inputpass:{
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    btnlogin:{
        height: 45,
        width:230,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnLoginText:{
        color:'#e02041',
        fontSize: 16,
        fontWeight: 'bold'
    },

    btnregister:{
        alignSelf: 'center',
        marginTop: 45,
        
    },

    btnRegisterText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
    }
})