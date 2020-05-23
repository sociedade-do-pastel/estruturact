import React from 'react';
import {
    Text,
    Button,
    ScrollView,
	View
} from 'react-native';
import {Style} from '../components/Theme';
import SimulationView from '../components/SimulationView';
import ArrayProvider from '../structures/heap/array_provider.js';
import {ArrayContext} from '../structures/heap/array_provider.js';
import Listinha from  '../structures/heap/listinha.js';
import ArvoreHeap from  '../structures/heap/arvre.js';

export default class HeapScreen extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			buttonName: 'Construir Heap'
		}
	}
	
    render(){
	return(
	    <ArrayProvider>
	      <ArrayContext.Consumer>
			{
		    tela_heap =>
			<SimulationView
			  editable={true}
			  buttons={['Inserir', 'Remover', 'Buscar']}
			  operations={[valor_insercao => tela_heap.adicionar (valor_insercao),
					       valor_deletar =>  tela_heap.remover (valor_deletar),
						   valor_procurar =>  tela_heap.popHeap ()]}>
				
			    <ScrollView>
				
				<View style={Style.preHeap}>
				<Listinha lista={tela_heap.vetor_apresentado}></Listinha>
					{tela_heap.vetorPreenchido ?
					 <Text
					 style={Style.preHeapButton}
					 onPress={() =>
							  this.state.buttonName === 'Construir Heap'
							  ? this.setState({buttonName: 'Resetar'}, tela_heap.construir)
							  : this.setState({buttonName: 'Construir Heap'})}
					 >{this.state.buttonName}</Text>
					 : null
					}
					 </View>

				<View style={Style.posHeapList}>
				<Listinha lista={tela_heap.heap}></Listinha>
				</View>
				<ArvoreHeap heap={tela_heap.heap}></ArvoreHeap>
				</ScrollView>
			    </SimulationView>
			}
	      </ArrayContext.Consumer>
	    </ArrayProvider>
	);
    }
}
