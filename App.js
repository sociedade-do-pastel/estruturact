import 'react-native-gesture-handler';
import React from 'react';

import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import HashScreen from './screens/HashScreen';
import HeapScreen from './screens/HeapScreen';
import HashTutorialScreen from './screens/HashTutorialScreen';
import HeapTutorialScreen from './screens/HeapTutorialScreen';
import Wrapper from './Wrapper';
import ThemeButton from './components/ThemeButton';
import { ThemeContext, themes } from './components/Theme';

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
			}), this.saveTheme);
		};

		this.state = {
			theme: themes.white,
			toggleTheme: this.toggleTheme,
		};

		this.saveTheme = this.saveTheme.bind(this);
		this.loadTheme = this.loadTheme.bind(this);

		this.loadTheme();
	}

	async saveTheme () {
		try {
			const value = this.state.theme.dark === true ? 'black' : 'white';
			await AsyncStorage.setItem('selectedTheme', value);
		} catch (e) {
			console.log(e);
		}
	}

	async loadTheme () {
		try {
			const value = await AsyncStorage.getItem('selectedTheme')
			if(value !== null) {
				switch(value){
				case 'white': this.setState({theme: themes.white}); break;
				case 'black': this.setState({theme: themes.black}); break;
				}
			}
		} catch(e) {
			console.log(e);
		}
		this.setState({ready: true});
	}
	
	render(){
		if(this.state.ready)
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
					<Stack.Screen name="HashTutorial" component={HashTutorialScreen}
				                  options={{ title: 'Tutorial Hash' }}/>
					<Stack.Screen name="HeapTutorial" component={HeapTutorialScreen}
				                  options={{ title: 'Tutorial Heap' }}/>
				
			        </Stack.Navigator>
					</NavigationContainer>
					</ThemeContext.Provider>
			);
		else
			return(<View/>)
	}
}
