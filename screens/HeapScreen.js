import React from 'react';
import { Text } from 'react-native';

import SimulationView from '../SimulationView';

export default class HeapScreen extends React.Component {
	render(){
		return(
			<SimulationView
			  editable={true}
			  insertOp={(x) => console.log(x)}
			  removeOp={(x) => console.log(x)}
			  searchOp={(x) => console.log(x)}
			>
			</SimulationView>
		);
	}
}
