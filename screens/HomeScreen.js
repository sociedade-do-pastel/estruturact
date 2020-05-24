import React from 'react';
import {Image, FlatList} from 'react-native';
import {Card, CardTitle, CardAction, CardButton} from 'react-native-material-cards';
import {ThemeContext, Style} from '../components/Theme';

const conteudo= [
	{id: 0, imgSrc: require('../images/hashBanner.png'), name: 'Hash'},
	{id: 1, imgSrc: require('../images/heapBanner.png'), name: 'Heap'}
];

export default class HomeScreen extends React.Component {
	render(){
		return(
				<ThemeContext.Consumer>
				{({theme, toggleTheme}) => (
						<FlatList
					data={conteudo}
					renderItem={({ item }) =>
						  <Card
							isDark={theme.dark}>
						  <Image
								style={[Style.homeScreenImages, {backgroundColor: theme.colors.card}]}
								source={item.imgSrc} 
						  />
						  <CardTitle
								style={{backgroundColor: theme.colors.card}}
								title={item.name}
						  />
						  <CardAction 
								separator={true} 
								inColumn={false}
								style={{backgroundColor: theme.colors.card, borderTopWidth: 1}}>
						  <CardButton
								onPress={() => this.props.navigation.navigate(item.name)}
								title="Simulação"
								color={Style.homeScreenAccentColor.color}
								/>
						  <CardButton
								onPress={() => this.props.navigation.navigate(item.name+'Tutorial')}
								title="Tutorial"
								color={Style.homeScreenAccentColor.color}
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
