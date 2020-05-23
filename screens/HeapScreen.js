import React from 'react';
import {
    Text,
    Button,
    ScrollView,
} from 'react-native';
import SimulationView from '../components/SimulationView';
import ArrayProvider from '../structures/heap/array_provider.js';
import {ArrayContext} from '../structures/heap/array_provider.js';
import Listinha from  '../structures/heap/listinha.js';
import ArvoreHeap from  '../structures/heap/arvre.js';

export default class HeapScreen extends React.Component {
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
			      <Listinha lista={tela_heap.vetor_apresentado}></Listinha>
				  <Button onPress={tela_heap.construir} title="Construir heap!"/>
				      <Listinha lista={tela_heap.heap}></Listinha>
					  <ArvoreHeap heap={tela_heap.heap}></ArvoreHeap>
				  </ScrollView>
			    </SimulationView>
			}
	      </ArrayContext.Consumer>
	    </ArrayProvider>
	);
    }
}
