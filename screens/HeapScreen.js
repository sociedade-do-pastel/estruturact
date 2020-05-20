import React from 'react';
import {
    Text,
    Button
} from 'react-native';
import SimulationView from '../SimulationView';
import ArrayProvider from '../structures/heap/array_provider.js';
import {ArrayContext} from '../structures/heap/array_provider.js';
import Listinha from  '../structures/heap/listinha.js';

export default class HeapScreen extends React.Component {
    render(){
	return(
	    <ArrayProvider>
	      <ArrayContext.Consumer>
		{
		    tela_heap =>
			<SimulationView
			      editable={true}
			      insertOp={
				  valor_insercao =>
				      tela_heap.adicionar (valor_insercao)
					  }
					  removeOp={
					      valor_deletar =>
						  tela_heap.remover (valor_deletar)
					  }
					  searchOp={
					      valor_procurar =>
						  tela_heap.procurar (valor_procurar)
					  }
					  >
					  <Text>Valores que introduzistes</Text>
					      <Listinha lista={tela_heap.vetor_apresentado}></Listinha>
						  <Text>{tela_heap.is_arvore ? "É árvore completa":  "Não é árvore completa"}</Text>
						      <Button onPress={tela_heap.construir} title="Construir heap!"/>
							  <Listinha lista={tela_heap.heap}></Listinha>
			    </SimulationView>
			}
	      </ArrayContext.Consumer>
	    </ArrayProvider>
	);
    }
}
