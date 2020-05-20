import React from 'react';
import { View, Text } from 'react-native';

import SimulationView from '../components/SimulationView';
import DialogHash from '../components/DialogHash';
import { Style } from '../components/Theme';

export default class HashScreen extends React.Component {
	constructor(props){
		super(props);
		this.state={editable: false};
		this.props.navigation.setOptions({
			headerRight: () => (
					<Text onPress={this.showDialog} style={Style.hashHeaderButton}>Novo</Text>
			),
		});

		this.showDialog = this.showDialog.bind(this);
	}

	showDialog(){ this.setState({isDialogVisible: true}); }
	
	render(){
		const menu =
			  <DialogHash
		        visible={this.state.isDialogVisible}
		        onConfirm={(value)=>this.setState({tamanho: value, editable: true, isDialogVisible: false})}
		        onCancel={()=>this.setState({isDialogVisible: false})}
			  />
			
		if(this.state.editable === false){
			return(
				<View style={Style.preHashScreen}>
					<Text onPress={this.showDialog}>Clique em novo para inserir o tamanho</Text>
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
