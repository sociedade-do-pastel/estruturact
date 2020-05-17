import React from 'react';
import {Image, FlatList} from 'react-native';
import {Card, CardTitle, CardAction, CardButton} from 'react-native-material-cards';
import {Style} from '../Theme';

const conteudo= [
	{id: 0, imgSrc: require('../images/harold.jpg'), name: 'Hash'},
	{id: 1, imgSrc: require('../images/harold2.jpg'), name: 'Heap'}
];

export default class HomeScreen extends React.Component {
	render(){
		return(
			<FlatList
			  data={conteudo}
			  renderItem={({ item }) =>
						<Card>
						<Image
						  style={Style.images}
						  source={item.imgSrc} 
						/>
						<CardTitle
						  title={item.name}
						/>
						<CardAction 
						  separator={true} 
						  inColumn={false}>
						<CardButton
						onPress={() => this.props.navigation.navigate(item.name)}
						  title="Simulação"
						  color={Style.homeScreenAccentColor.color}
						/>
						</CardAction>
						</Card>
					   }
			  keyExtractor={item => item.id}
			/>
		);
	}
}
