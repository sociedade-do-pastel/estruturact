import 'react-native-gesture-handler';
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import AboutUsScreen from './AboutUsScreen';

const Tab = createMaterialBottomTabNavigator();

export default class Wrapper extends React.Component {
	render(){
		return(
				<Tab.Navigator shifting={true}>
				
				<Tab.Screen name="Estruturas" component={HomeScreen} options={{tabBarColor: '#664da1'}}/>
				<Tab.Screen name="Sobre nós" component={AboutUsScreen} options={{tabBarColor: '#7c64b2'}}/>
				
			    </Tab.Navigator>
		);
	}
}
