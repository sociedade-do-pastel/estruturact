import React from 'react';
import { View } from 'react-native';
import Dialog from "react-native-dialog";

import { ThemeContext, Style } from './Theme';

export default class DialogHash extends React.Component{
	constructor(props){
		super(props);
		this.state={inputValue: '', bColor: '#bebebe'};

		this.verifyInput = this.verifyInput.bind(this);
		this.clearButtonAction = this.clearButtonAction.bind(this);
	}

	clearButtonAction(){
		this.setState({bColor: '#bebebe'}, this.props.onCancel())
	}

	verifyInput(){
		this.textInput.clear();
		if(isNaN(this.state.inputValue) | this.state.inputValue === '')
			this.setState({bColor: 'red'});
		else{
			this.setState({bColor: '#bebebe'});
			this.props.onConfirm(this.state.inputValue);
		}
	}
	
	render(){
		const reactNativeModalProps = {
			onBackdropPress: this.clearButtonAction,
		};

		return(
				<ThemeContext.Consumer>
				{({theme, toggleTheme}) => (
						<Dialog.Container
					      contentStyle={{backgroundColor: theme.colors.primary}}
					      visible={this.props.visible}
					      {...reactNativeModalProps}>
						<Dialog.Title
					      style={{fontWeight: 'bold', color: theme.colors.text}}
						>Iniciar nova Hash</Dialog.Title>
						<Dialog.Description
					      style={{color: theme.colors.text}}
						>Insira o tamanho da estrutura</Dialog.Description>
						<Dialog.Input
					      textInputRef={(input) => {this.textInput = input}}
				          onChangeText={(text)=>this.setState({inputValue: text})}
					      placeholder='Tamanho da hash'
					      placeholderTextColor='#bebebe'
					      keyboardType='numeric'
					      style={{borderBottomWidth: 1, borderColor: this.state.bColor, color: theme.colors.text}}/>
						<Dialog.Button
					      color={Style.simulationScreenAccentColor.color}
					      label="Cancelar"
					      onPress={this.clearButtonAction}/>
						<Dialog.Button
					      color={Style.simulationScreenAccentColor.color}
					      label="Confirmar"
					      onPress={this.verifyInput} />
						</Dialog.Container>
				)}
		    </ThemeContext.Consumer>	
		);
	}
}
