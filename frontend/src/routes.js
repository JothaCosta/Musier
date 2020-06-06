import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

import Home from './Pages/Home'
import ListBand from './Pages/ListBand'
import ListEvent from './Pages/ListEvent'
import ListMusician from './Pages/ListMusician'
import Login from './Pages/Login'
import PerfilBand from './Pages/PerfilBand'
import PerfilMusician from './Pages/PerfilMusician'
import RegisterBand from './Pages/RegisterBand'
import RegisterEvent from './Pages/RegisterEvent'
import RegisterMusician from './Pages/RegisterMusician'
import UpdateBand from './Pages/UpdateBand'
import UpdateMusician from './Pages/UpdateMusician'

export default function Routes(){
     return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="ListBand" component={ListBand}/>
                <AppStack.Screen name="ListEvent" component={ListEvent}/>
                <AppStack.Screen name="ListMusician" component={ListMusician}/>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="PerfilBand" component={PerfilBand}/>
                <AppStack.Screen name="PerfilMusician" component={PerfilMusician}/>
                <AppStack.Screen name="RegisterBand" component={RegisterBand}/>
                <AppStack.Screen name="RegisterEvent" component={RegisterEvent}/>
                <AppStack.Screen name="RegisterMusician" component={RegisterMusician}/>
                <AppStack.Screen name="UpdateBand" component={UpdateBand}/>
                <AppStack.Screen name="UpdateMusician" component={UpdateMusician}/>

            </AppStack.Navigator>

            <AppTab.Navigator>
                
            </AppTab.Navigator>
        </NavigationContainer>
     );
}