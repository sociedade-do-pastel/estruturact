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

const simulationsAccent = '#2089dc';
const simulationBackground = '#e3e4e9';

export const ThemeContext = React.createContext({
	theme: themes.white,
	toggleTheme: () => {},
});

export const Style = StyleSheet.create({
	homeScreenImages: {
		flex: 1,
		resizeMode: 'contain',
		width: windowWidth,
	},	
	aboutUsScreenImages: {
		flex: 1,
		resizeMode: 'cover',
		width: windowWidth,
	},
	aboutUsScreenAccentColor: {
		color: "#ff8172"
	},
	homeScreenAccentColor: {
		color: '#6a5acd'
	},
	simulationScreenAccentColor: {
		color: simulationsAccent
	},
	preHashScreen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e3e4e9'
	},
	simulationView: {
		flex:1,
		backgroundColor: simulationBackground
	},
	simulationContent: {
		flex: 1,
		flexGrow: 5
	},
	simulationViewButtonGroup: {
		justifyContent: 'flex-end',
		marginTop: 10,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		backgroundColor: 'white'
	},
	simulationViewTextInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#bcc3c6',
		backgroundColor: 'white'
	},
	simulationViewConfirmButton: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'white',
		padding: 10,
		backgroundColor: simulationsAccent
	},
	hashHeaderButton: {
		padding: 15,
		color: simulationsAccent
	},
	hashHead: {
		height: 40,
		backgroundColor: '#64615a',
		marginTop: 10
	},
	hashText: {
		margin: 6,
		textAlign:'center',
		color:'white'
	},
	hashRow: {
		flexDirection: 'row',
		paddingTop:'1%'
	},
	hashEmpty: {
		height: 40,
		width:60,
		backgroundColor: simulationBackground
	},
	hashFull: {
		height: 40,
		width:60,
		backgroundColor: simulationsAccent,
	},
	hashDataWrapper: {
		marginTop: -1
	},
	hashOuterTable: {
		borderWidth: 4,
		borderColor: simulationBackground,
		paddingTop:'10%'
	},
	hashInnerTable: {
		borderWidth: 3,
		borderColor: simulationBackground
	}
});
