import React from 'react';
import { Image, Linking,	FlatList } from 'react-native';
import { Card, CardTitle, CardAction, CardButton } from 'react-native-material-cards';
import { ThemeContext, Style } from '../components/Theme';

const conteudo= [
	{id: 0, imgSrc: require('../images/felipe.jpeg'), name: 'Felipe Maciel de Sousa', ra: '22.218.042-4', github: 'uniefelsousa'},
	{id: 1, imgSrc: require('../images/gui.jpeg'), name: 'Guilherme Ormond Sampaio', ra: '22.218.007-7', github: 'Guior'},
	{id: 2, imgSrc: require('../images/leon.jpeg'), name: 'Leon Ferreira Bellini', ra: '22.218.002-8', github: 'seleonel'}
];

export default class AboutUsScreen extends React.Component {
	render(){
		return(
				<ThemeContext.Consumer>
				{({theme, toggleTheme}) => (
						<FlatList
			  data={conteudo}
			  renderItem={({ item }) =>  
						<Card
						    style={Style.card}
							isDark={theme.dark}>
						<Image
						  style={Style.aboutUsScreenImages}
						  source={item.imgSrc}
						/>		
						<CardTitle
						  style={{backgroundColor: theme.colors.card}}
						  title={item.name}
						  subtitle={`RA: ${item.ra}`}
						/>
						<CardAction 
						  separator={true} 
						  inColumn={false}
						  style={{backgroundColor: theme.colors.card, borderTopWidth: 1}}>
						<CardButton
						  onPress={() => {Linking.openURL(`https://github.com/${item.github}`)}}
						  title="GitHub"
						  color={Style.aboutUsScreenAccentColor.color}
						/>
						</CardAction>
						</Card>
					   }
			  keyExtractor={item => item.id}
			/>
				)}
		    </ThemeContext.Consumer>	
		);
	}
}
