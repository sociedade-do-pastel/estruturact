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
	simulationAnimatedText: {
		color: 'white',
		fontSize: 22,
		textAlign: 'center',
		backgroundColor: '#64615a',
		margin: 10,
		padding: 3,
		width: windowWidth-20
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
		backgroundColor: simulationsAccent,
		marginTop: 10
	},
	hashText: {
		margin: 6,
		textAlign:'center',
		color:'white'
	},
	hashRow: {
		flexDirection: 'row',
	},
	hashEmpty: {
		height: 40,
		width:60,
		backgroundColor: simulationBackground
	},
	hashFull: {
		height: 40,
		width:60,
		backgroundColor: '#64615a',
	},
	hashDataWrapper: {
		marginTop: -1
	},
	hashOuterTable: {
		borderWidth: 4,
		borderColor: simulationBackground,
		paddingTop:'5'
	},
	hashInnerTable: {
		borderWidth: 3,
		borderColor: simulationBackground
	},
	heapNodeIndex: {
		textAlign: 'center',
		color: simulationsAccent,
		fontWeight: 'bold'
	},
	heapNodeNumber: {
		textAlign: 'center',
		color: 'white',
		fontSize: 22,
		borderRadius: 100,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
		margin: 2,
		backgroundColor: '#64615a',
	},
	preHeap: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#bebebe',
	},
	preHeapButton: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'white',
		padding: 10,
		backgroundColor: simulationsAccent,
	},
	posHeapList: {
		backgroundColor: 'white',
	},
	arvreNodeNumber: {
		textAlign: 'center',
		color: 'white',
		borderRadius: 100,
		margin: 2,
		backgroundColor: '#64615a',
	},
	card: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,	
		elevation: 5,
	}
});
