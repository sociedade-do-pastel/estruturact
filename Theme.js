import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const WhiteTheme = {
	dark: false,
	colors: {
		primary: '#ffffff',
		background: '#e3e4e9',
		card: '#ffffff',
		text: '#000000',
		border: '#000000',
	},
};

export const BlackTheme = {
	dark: true,
	colors: {
		primary: '#ffffff',
		background: '#050505',
		card: '#17181a',
		text: '#ffffff',
		border: '#000000',
	},
};

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
