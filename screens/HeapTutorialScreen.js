import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Style } from '../components/Theme';


const Section = (props) =>
      {
	  return (
	      <View style = {style_text.section}>
		<Text style = {style_text.text}>
		  {props.children}
		</Text>
	      </View>
	  );
      };
const Paragraph = (props) =>
      {
	  return (

	      <Text style={style_text.paragraph}>{props.children}</Text>
	  );
      };

const HeapTutorialScreen = (props) =>
      {
	  // aparentemente react-native não funciona bem com textos
	  // longos
	  // alternativa = webview (plano B)
	  return(
	      // a
	      <ScrollView style={Style.simulationView}>
		<Section>Uma breve explicação</Section>
		<Paragraph>Criada especificamente para o algoritmo de sorting Heapsort,
		  a Heap é uma estrutura cujas seguintes propriedades devem ser mantidas: </Paragraph>
		<Text> 1 - É uma árvore binária completa </Text>
		<Text> 2 - O valor de um pai é sempre: </Text>
		<Text style={{paddingLeft: 29}}>Maior ou igual que o valor de seus filhos no caso de uma MAX-HEAP</Text>
		<Text style={{paddingLeft: 29}}>Menor ou igual que o valor de seus filhos no caso de uma MIN-HEAP</Text>
		<Section>A simulação</Section>
		<Paragraph>No caso deste aplicativo, estaremos trabalhando com a MAX-HEAP.
		  Primeiro insira uma sequência de inteiros
		  que deseja se construir uma max-heap com. </Paragraph>
		<Text>SCREENSHOT DO INSERIR AAAAA</Text>
		<Paragraph>Fique livre para remover os valores indesejados.
		  Ao concluir pressione "Construir heap"</Paragraph>
		<Paragraph>Por ser uma árvore binária completa,
	      uma Heap ainda pode ser representada como vetor. Cada índice representa os nós indo da esquerda para a direita. </Paragraph>
		<Text>IMAGEM DO VETOR DA HEAP AAAAAAAAA</Text>

		<Paragraph>Para descobrir o filho esquerdo de um nó em um vetor
		  indexado em 0, apenas faça </Paragraph>

		<Text>2*índice + 1 </Text>

		<Paragraph>De forma semelhante 2*índice +2 retorna o filho da direita.</Paragraph>

		<Text>Talvez seja melhor escrever as esquações como imagem?</Text>

		<Paragraph>
		  Com sua max-heap criada, esta pode ser operada como uma
		  fila de prioridade, onde três operações existem:
		</Paragraph>

		<Text>Imagem de cada uma?</Text>
		<Text>
		  1 - Inserir: insere o valor e calcula a possibilidade deste
		  novo valor ter quebrado uma das regras da Max-heap</Text>

		<Text>
		  2 - PopFront: Remove o maior valor localizado no índice
		  0 do vetor/árvore
		</Text>

		<Text>
		  3 - Aumentar valor: Dado o índice e valor desejado,
	          o valor é inserido e a estrutura faz as devidas checagens.
		</Text>
		<Paragraph>
		  Note que nesse caso,
	          os valores de cada nó determinam
		  a prioridade destes. Por causa da natureza da max-heap, o maior valor
		  SEMPRE estará no topo.
		</Paragraph>
	      </ScrollView>
	  );

	  
      };

const style_text = StyleSheet.create (
    {
	text: {
	    fontSize: 24,
	    textAlign: "left",
	    fontWeight: "bold",
	    paddingBottom: 3,
	    fontFamily:  "sans-serif-thin",
	    

	},
	
	section : {
	    borderBottomColor: "black",
	    borderBottomWidth: StyleSheet.hairlineWidth,
	    paddingTop: 4,
	    paddingLeft: 20
	    
	},
	paragraph : {
	    textAlign : "justify",
	    margin: 5,
	    paddingLeft: 3,
	    fontSize: 15
	}

    });
export default HeapTutorialScreen;






