import React from 'react';
import { Text } from 'react-native';

export default class CustomText extends React.Component{
	render(){
		return (		
				<Text style={[{fontSize: 16}, this.props.style]}>{this.props.children}</Text>
		);
	}
};
