import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const themes = {
	white: {
		dark: false,
		statusBar: '#bebebe',
		colors: {
			primary: '#ffffff',
			background: '#e3e4e9',
			card: '#ffffff',
			text: '#000000',
			border: '#000000',
		}
	},
	black: {
		dark: true,
		statusBar: '#131416',
		colors: {
			primary: '#17181a',
			background: '#050505',
			card: '#17181a',
			text: '#ffffff',
			border: '#000000',
		}
	}
}
export const ThemeContext = React.createContext({
	theme: themes.black,
	toggleTheme: () => {},
});

export const Style = StyleSheet.create({
	images: {
		flex: 1,
		resizeMode: 'cover',
		width: windowWidth
	},
	aboutUsScreenAccentColor: {
		color: "#ff8172"
	},
	homeScreenAccentColor: {
		color: '#6a5acd'
	}
});
