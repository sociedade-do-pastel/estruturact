import React from 'react';
import {
	View,
	Text,
	TextInput
} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

export default class SimulationView extends React.Component {
	constructor(props){
		super(props);
		this.state = {selectedIndex: 0};
		this.updateIndex = this.updateIndex.bind(this)
	}
	
	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
	}
	
	render(){
		const buttons = ['Inserir', 'Remover', 'Buscar'];
		const { selectedIndex } = this.state;
		
		return(
			<View style={{flex:1}}>
				{this.props.children}
			<View style={{flex: 1, justifyContent: 'flex-end', marginTop: 10, borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
			<ButtonGroup
			  onPress={this.updateIndex}
			  buttons={buttons}
			  selectedIndex={selectedIndex}
			/>
				
			<View style={{margin: 10, flexDirection: 'row'}}>
			<TextInput
			style={{flex: 1, borderWidth: 1, borderColor: '#bcc3c6', backgroundColor: 'white'}}
			  placeholder='Valor da operação' 
			/>
			<Text
			style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', padding: 10, backgroundColor: '#2089dc'}}
			>Confirmar
			</Text>
			</View>
			</View>
			</View>
		);
	}
}
