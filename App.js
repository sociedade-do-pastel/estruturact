import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HashScreen from './screens/HashScreen';
import HeapScreen from './screens/HeapScreen';
import Wrapper from './Wrapper';
import ThemeButton from './ThemeButton';
import { ThemeContext, themes } from './Theme';

const Stack = createStackNavigator();

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.toggleTheme = () => {
			this.setState(state => ({
				theme:
				state.theme === themes.black
					? themes.white
					: themes.black,
			}));
		};

		this.state = {
			theme: themes.white,
			toggleTheme: this.toggleTheme,
		};
	}

	render(){
		return(
				<ThemeContext.Provider value={this.state}>

				<StatusBar backgroundColor={this.state.theme.statusBar}/>
			
				<NavigationContainer theme={this.state.theme}>
				<Stack.Navigator>

				<Stack.Screen name="Estruturact" component={Wrapper}
			      options={{headerRight: () =>  (
				    <ThemeButton/>
			      )}}/>
				<Stack.Screen name="Hash" component={HashScreen}/>
				<Stack.Screen name="Heap" component={HeapScreen}/>
				
			    </Stack.Navigator>
				</NavigationContainer>
				</ThemeContext.Provider>
		);
	}
}
