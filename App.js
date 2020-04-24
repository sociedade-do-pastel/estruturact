import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HashScreen from './HashScreen';
import Wrapper from './Wrapper';

const Stack = createStackNavigator();



export default class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<NavigationContainer>
				<Stack.Navigator>

				<Stack.Screen name="Estruturact" component={Wrapper}/>
				<Stack.Screen name="Hash" component={HashScreen}/>
				
			    </Stack.Navigator>
		    </NavigationContainer>
		);
	}
}
