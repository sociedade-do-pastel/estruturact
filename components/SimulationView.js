import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Style } from './Theme';

export default class SimulationView extends React.Component {
	constructor(props){
		super(props);
		this.state = {selectedIndex: 0, valor: null};
		this.updateIndex = this.updateIndex.bind(this);
		this.executeOp = this.executeOp.bind(this);
	}

	executeOp(){
		this.textInput.blur();
		switch(this.state.selectedIndex){
		case 0: this.props.insertOp(this.state.valor); break;
		case 1: this.props.removeOp(this.state.valor); break;
		case 2: this.props.searchOp(this.state.valor); break;
		}
	}
	
	updateIndex(selectedIndex) {
		this.setState({selectedIndex});
	}
	
	render(){
		const buttons = ['Inserir', 'Remover', 'Buscar'];
		const { selectedIndex } = this.state;

		return(
			<View style={Style.simulationView}>
			{this.props.children}

			<View style={Style.simulationViewButtonGroup}>
			<ButtonGroup
			  onPress={this.updateIndex}
			  buttons={buttons}
			  selectedIndex={selectedIndex}
			/>
				
			<View style={{margin: 10, flexDirection: 'row'}}>
			<TextInput
			  ref={input => { this.textInput = input }}
			  onFocus={() => this.textInput.clear()}
			  style={Style.simulationViewTextInput}
			  placeholder='Valor da operação'
			  keyboardType = 'numeric'
			  onChangeText={(x) => this.setState({valor: x})}
			/>
			<Text
			  style={Style.simulationViewConfirmButton}
			  onPress={this.executeOp}
			>Confirmar</Text>
			</View>
				
			</View>
				
			</View>
		);
	}
}
