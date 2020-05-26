import React from 'react';
import {
    Text,
    Button,
    ScrollView,
	View
} from 'react-native';
import {Style} from '../components/Theme';
import {Section} from '../components/TutorialComponents';
import SimulationView from '../components/SimulationView';
import ArrayProvider from '../structures/heap/array_provider.js';
import {ArrayContext} from '../structures/heap/array_provider.js';
import Listinha from  '../structures/heap/listinha.js';
import ArvoreHeap from  '../structures/heap/arvre.js';

export default class HeapScreen extends React.Component {
    constructor(props){
	super(props);
	this.state = {
	    buttonName: 'Construir Heap',
	    id_tela   : 0,
	};
    }
    
    mensageiro = (mensagem) =>
	{
	    this.viewRef.animate (mensagem);
	}
    
    render(){
	return(
	    <ArrayProvider key={this.state.id_tela} mensageiro={this.mensageiro}>
	      <ArrayContext.Consumer>
		{
		    tela_heap =>
			<SimulationView
			      ref={v => {this.viewRef = v;}}
			      editable={true}
			      buttons={tela_heap.is_heap ? ["Inserir", "PopFront", "Aumentar"] :  ["Inserir", "Remover"]}
			      operations={
				  [valor_insercao => tela_heap.adicionar (valor_insercao),
				   valor_deletar =>  tela_heap.remover (valor_deletar),
				   valor_aumentar =>  tela_heap.aumentarValor (valor_aumentar)]
			      }>
			      
			    <ScrollView>
				{tela_heap.vetorPreenchido ?
				 <View style={[Style.preHeap, Style.card]}>
				 <View style={{flex: 1, flexDirection: 'column'}}>
				     <Section viewStyle={{margin: 5}} textStyle={{fontSize: 18}}>Seu vetor</Section>
				     <Listinha lista={tela_heap.vetor_apresentado}></Listinha>
				   </View>
					       <Text
						     style={Style.preHeapButton}
						     onPress={
							 () =>
							      this.state.buttonName === 'Construir Heap'
								  ? this.setState({buttonName: 'Resetar'}, tela_heap.construir)
								  : this.setState({buttonName: 'Construir Heap', id_tela: this.state.id_tela + 1})}
				                  >{this.state.buttonName}</Text>
				 </View>
						   : null
				}
				        <View style={[Style.posHeapList, Style.card]}>
				         {tela_heap.heapPreenchida ?
				          <Section viewStyle={{margin: 5}} textStyle={{fontSize: 18}}>Max-heap gerada</Section>
   				         : null
				         }
					      <Listinha lista={tela_heap.heap}></Listinha>
				        </View>
				        <View style={[Style.posHeapList, Style.card]}>
				         {tela_heap.heapPreenchida ?
				          <Section viewStyle={{margin: 5}} textStyle={{fontSize: 18}}>Forma de árvore</Section>
   				         : null
				         }
				          <ArvoreHeap heap={tela_heap.heap}></ArvoreHeap>
				       </View>
		
				  </ScrollView>
			    </SimulationView>

			}
	      </ArrayContext.Consumer>
	    </ArrayProvider>
	);
    }
}
