import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

export default function Routes(){
     return(
        <NavigationContainer>
            <AppStack.Navigator>

            </AppStack.Navigator>

            <AppTab.Navigator>
                
            </AppTab.Navigator>
        </NavigationContainer>
     );
}