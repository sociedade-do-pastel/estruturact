import React from 'react';
import {
	SafeAreaView,
	Image,
	ScrollView,
	Dimensions,
	StyleSheet,
	Linking
} from 'react-native';

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const windowWidth = Dimensions.get('window').width;

export default class AboutUsScreen extends React.Component {
	render(){
		return(
			<SafeAreaView>
			<ScrollView>
			<Card>
				<Image
			style={staticStyle.images}
			source={require('../images/felipe.jpeg')} 
				/>
				<CardTitle
			title="Felipe Maciel de Sousa" 
			subtitle="RA: 22.218.042-4"
				/>
				<CardAction 
			separator={true} 
			inColumn={false}>
				<CardButton
			onPress={() => {Linking.openURL('https://github.com/uniefelsousa')}}
			title="GitHub"
			color="blue"
				/>
				</CardAction>
				</Card>

				<Card>
				<Image
			style={staticStyle.images}
			source={require('../images/gui.jpeg')} 
				/>
				<CardTitle
			title="Guilherme Ormond Sampaio" 
			subtitle="RA: 22.218.007-7"
				/>
				<CardAction 
			separator={true} 
			inColumn={false}>
				<CardButton
			onPress={() => {Linking.openURL('https://github.com/Guior')}}
			title="GitHub"
			color="blue"
				/>
				</CardAction>
				</Card>

				<Card>
				<Image
			style={staticStyle.images}
			source={require('../images/leon.jpeg')} 
				/>
				<CardTitle
			title="Leon Ferreira Bellini" 
			subtitle="RA: 22.218.002-8"
				/>
				<CardAction 
			separator={true} 
			inColumn={false}>
				<CardButton
			onPress={() => {Linking.openURL('https://github.com/seleonel')}}
			title="GitHub"
			color="blue"
				/>
				</CardAction>
				</Card>
				</ScrollView>
				</SafeAreaView>
		);
	}
}

const staticStyle = StyleSheet.create({
	images: {
		flex: 1,
		resizeMode: 'cover',
		width: windowWidth
	}
});
