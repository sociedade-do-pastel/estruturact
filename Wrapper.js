import 'react-native-gesture-handler';
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import {Style} from './components/Theme';

const Tab = createMaterialBottomTabNavigator();
const estruturasIcon = <Icon name="dice" size={20} color='#ffffff'/>;
const aboutUsIcon = <Icon name="user-friends" size={20} color='#ffffff'/>;

export default class Wrapper extends React.Component {
	render(){
		return(
				<Tab.Navigator shifting={true} activeColor='#ffffff'
			screenOptions={({ route }) => ({
				tabBarIcon: () => {
					if (route.name === 'Estruturas') 
						return estruturasIcon;
					else if (route.name === 'Sobre nós') 
						return aboutUsIcon;
				}})}>
				
				<Tab.Screen name="Estruturas" component={HomeScreen} options={{tabBarColor: Style.homeScreenAccentColor.color}}/>
				<Tab.Screen name="Sobre nós" component={AboutUsScreen} options={{tabBarColor: Style.aboutUsScreenAccentColor.color}}/>
				
			    </Tab.Navigator>
		);
	}
}
