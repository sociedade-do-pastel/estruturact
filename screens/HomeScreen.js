import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

import AboutUsScreen from './AboutUsScreen';

export default class HomeScreen extends React.Component {
	render(){
		return(
			
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Button
			title="Hash"
			onPress={() => this.props.navigation.navigate('Hash')}
				/>
				<Button
			title="Heap"
			onPress={() => this.props.navigation.navigate('Heap')}
				/>
				</View>
		);
	}
}
