import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Style } from './Theme';

const animationInterval = 1750;

export default class SimulationView extends React.Component {
	constructor(props){
		super(props);
		this.state = {selectedIndex: 0, valor: null, operationQueue: [{id: 0, text: 'Aguardando operação'}], acceptingInput: true};
		
		this.updateIndex = this.updateIndex.bind(this);
		this.executeOp = this.executeOp.bind(this);
		this.animate = this.animate.bind(this);
	}

	animate(textToAnimate, callbackFunction=undefined){
		this.setState({acceptingInput: false});
		
		for(let x=0; x<textToAnimate.length; x++)
			this.state.operationQueue.push({id: (x+1), text: textToAnimate[x]});

		let y=0;
		for(let x=0; x<this.state.operationQueue.length; x++, y++){
			setTimeout(()=>{
				this.flatListRef.scrollToIndex({animated: true, index: x})
			}, animationInterval*y);
		}
		
		setTimeout(()=>{
			this.flatListRef.scrollToIndex({animated: true, index: 0})
		}, animationInterval*y);

		setTimeout(()=>{
			this.setState({operationQueue: [{id: 0, text: 'Aguardando operação'}], acceptingInput: true});
		}, (animationInterval*y)+500);

		if(callbackFunction !== undefined){
			setTimeout(()=>{
				callbackFunction();
			}, (animationInterval*y)+510);
		}
	}

	executeOp(){
		this.textInput.blur();
		this.props.operations[this.state.selectedIndex](this.state.valor);
	}
	
	updateIndex(selectedIndex) {
		this.setState({selectedIndex});
	}
	
	render(){
		const buttons = this.props.buttons;
		const isEditable = this.props.editable === undefined ? true : this.props.editable;
		const { selectedIndex } = this.state;

		return(
			<View style={Style.simulationView}>
			<View style={Style.simulationContent}>
			{this.props.children}
			</View>
			
			<View style={Style.simulationViewButtonGroup}>

			<FlatList
			  ref={(ref) => { this.flatListRef = ref; }}
			  showsHorizontalScrollIndicator={false}
			  scrollEnabled={false}
			  horizontal={true}
			  data={this.state.operationQueue}
			  renderItem={({ item }) =>  
						  <Text style={Style.simulationAnimatedText}>
						  {item.text}
						  </Text>						  
					   }
			  keyExtractor={item => item.id}
			/>
				
			<ButtonGroup
			  disabled={!this.state.acceptingInput || !isEditable}
			  onPress={this.updateIndex}
			  buttons={buttons}
			  selectedIndex={selectedIndex}
			/>
				
			<View style={{margin: 10, flexDirection: 'row'}}>
			<TextInput
			  editable={this.state.acceptingInput && isEditable}
			  ref={input => { this.textInput = input }}
			  onFocus={() => this.textInput.clear()}
			  style={Style.simulationViewTextInput}
			  placeholder='Valor da operação'
			  keyboardType = 'numeric'
			  onChangeText={(x) => this.setState({valor: x})}
			/>
			<Text
			  disabled={!this.props.editable || !this.state.acceptingInput}
			  style={Style.simulationViewConfirmButton}
			  onPress={this.executeOp}
			>Confirmar</Text>
			</View>
				
			</View>
				
			</View>
		);
	}
}
