import React from 'react';
import {
	View,
	Text
} from 'react-native';

import SimulationView from '../SimulationView';
import DialogInput from 'react-native-dialog-input';

export default class HashScreen extends React.Component {
	constructor(props){
		super(props);
		this.state={editable: false, isDialogVisible: false};
		this.props.navigation.setOptions({
			headerRight: () => (
					<Text onPress={()=>this.setState({isDialogVisible: true})} style={{color: '#2089dc', padding: 10}}>Novo</Text>
			),
		});
	}
	
	render(){
		const menu = <DialogInput isDialogVisible={this.state.isDialogVisible}
		  title={"Iniciar nova Hash"}
		  message={"Insira o tamanho da estrutura"}
		  hintInput ={"Tamanho da estrutura"}
		  submitInput={(inputText) => this.setState({tamanho: inputText, editable: true, isDialogVisible: false})}
		  closeDialog={() => this.setState({isDialogVisible: false})}>
		  textInputProps={{keyboardType: 'number-pad'}}
		</DialogInput>

		if(this.state.editable === false){
			return(
					<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e3e4e9'}}>
					<Text>Clique em novo para inserir o tamanho</Text>
					{menu}
				</View>
			);
		}
		else{
			return(
				<SimulationView
				insertOp={(x) => console.log(x)}
				removeOp={(x) => console.log(x)}
				searchOp={(x) => console.log(x)}>
 
				{menu}					
				</SimulationView>
			);
		}
	}
}
