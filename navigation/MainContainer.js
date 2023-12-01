import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
// screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';


// screen names
const homeName='Home';
const detailsName='Details';
const settingsName='Settings';

const Tab=createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route})=>({
            tabBarIcon : ({focued,color,size})=>{
                let iconName;
                let rn=route.name;
if(rn===homeName){
iconName=focued ? 'home' :'home-outline'
}
else if(rn===detailsName){
iconName=focued ? 'list' :'list-outline'
} 
else if(rn===settingsName){
iconName=focued ? 'setting' :'settings-outline'
} 
return <Ionicons name={iconName} size={size} color={color}></Ionicons>

            },
        })}
        >
<Tab.Screen name={homeName} component={HomeScreen} />
<Tab.Screen name={detailsName} component={DetailsScreen} />
<Tab.Screen name={settingsName} component={SettingsScreen} />

        </Tab.Navigator>
    </NavigationContainer>
       
    );
  }