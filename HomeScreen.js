import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AboutUsScreen from './AboutUsScreen';

export default class HomeScreen extends React.Component {
	render(){
		return(
			
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Button
			title="Hash"
			onPress={() => this.props.navigation.navigate('Hash')}
				/>
				</View>
		);
	}
}
