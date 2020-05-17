import React from 'react';
import {View, Text,	TextInput} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

export default class SimulationView extends React.Component {
	constructor(props){
		super(props);
		this.state = {selectedIndex: 0, valor: null};
		this.updateIndex = this.updateIndex.bind(this);
		this.executeOp = this.executeOp.bind(this);
	}

	executeOp(){
		switch(this.state.selectedIndex){
		case 0: this.props.insertOp(this.state.valor); break;
		case 1: this.props.removeOp(this.state.valor); break;
		case 2: this.props.searchOp(this.state.valor); break;
		}
	}
	
	updateIndex(selectedIndex) {
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
			  keyboardType = 'numeric'
			  onChangeText={(x) => this.setState({valor: x})}
			/>
			<Text
			  style={{textAlign: 'center', textAlignVertical: 'center', color: 'white', padding: 10, backgroundColor: '#2089dc'}}
			  onPress={this.executeOp}>
				Confirmar
			</Text>
			</View>
				
			</View>
				
			</View>
		);
	}
}
