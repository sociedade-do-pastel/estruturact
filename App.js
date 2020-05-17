import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HashScreen from './screens/HashScreen';
import HeapScreen from './screens/HeapScreen';
import Wrapper from './Wrapper';
import {WhiteTheme, BlackTheme} from './Theme';

const Stack = createStackNavigator();

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {scheme : "white"};
		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme(){
		this.state.scheme === 'white' ? this.setState({scheme : 'dark'}) : this.setState({scheme : 'white'});		
	}
	
	render(){
		return(
				<NavigationContainer theme={this.state.scheme === 'dark' ? BlackTheme : WhiteTheme}>
				<Stack.Navigator>

				<Stack.Screen name="Estruturact" component={Wrapper}
			options={{headerRight: () =>  (
				this.state.scheme === 'white' ?
					<Icon.Button name="palette" size={20} onPress={this.changeTheme} color='#000000' backgroundColor="#ffffff"/>
					: <Icon.Button name="palette" size={20} onPress={this.changeTheme} color='#ffffff' backgroundColor="#17181a"/>
			)}}/>
				<Stack.Screen name="Hash" component={HashScreen}/>
				<Stack.Screen name="Heap" component={HeapScreen}/>
				
			    </Stack.Navigator>
			</NavigationContainer>
		);
	}
}
