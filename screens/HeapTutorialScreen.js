import React from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native';
import { Style } from '../components/Theme';
import Text from '../components/CustomText';
const {width, height} = Dimensions.get("window")


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

const Picture = (props) =>
      {
	  return (
			  <Image style={[{flex: 1, resizeMode: 'contain', maxWidth: width-35}, props.style]} source={props.source}/>
	  );
      };

const Paragraph = (props) =>
      {
	  return (

	      <Text style={style_text.paragraph}>{props.children}</Text>
	  );
      };

const Card = (props) =>
      {
	  return (

			  <View style={[style_text.card, Style.card]}>{props.children}</View>
	  );
      };

const SubCard = (props) =>
      {
	  return (

	      <View style={style_text.subCard}>{props.children}</View>
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

		<Card>
		<Section>Uma breve explicação</Section>
		<Paragraph>Criada especificamente para o algoritmo de sorting Heapsort,
		  a Heap é uma estrutura cujas seguintes propriedades devem ser mantidas: </Paragraph>
			  <SubCard>
		<Text style={{marginBottom: 10}}> 1 - É uma árvore binária completa </Text>
		<Text> 2 - O valor de um pai é sempre: </Text>
		<Text style={{paddingLeft: 29}}>Maior ou igual que o valor de seus filhos no caso de uma MAX-HEAP</Text>
			  <Text style={{paddingLeft: 29}}>Menor ou igual que o valor de seus filhos no caso de uma MIN-HEAP</Text>
			  </SubCard>
		</Card>

		<Card>
		<Section>A simulação</Section>
		<Paragraph>No caso deste aplicativo, estaremos trabalhando com a MAX-HEAP.
		  Primeiro insira uma sequência de inteiros
		  que deseja se construir uma max-heap com. </Paragraph>

		<Picture style={{maxHeight: 200}} source={require('../images/inserir.png')}/>
		  
		<Paragraph>Fique livre para remover os valores indesejados. Ao concluir pressione "Construir heap"</Paragraph>

		<Picture style={{maxHeight: 100}} source={require('../images/construirHeap.png')}/>
		  
		<Paragraph>Por ser uma árvore binária completa,
	      uma Heap ainda pode ser representada como vetor. Cada índice representa os nós indo da esquerda para a direita. </Paragraph>

		<Picture style={{maxHeight: 100}} source={require('../images/vetorHeap.png')}/>

		<Paragraph>Para descobrir o filho esquerdo de um nó em um vetor
		  indexado em 0, apenas faça </Paragraph>

		<Text style={{alignSelf: 'center', padding: 10, fontWeight: 'bold', backgroundColor: '#bebebe', borderRadius: 40, marginTop: 10, marginBottom: 10}}>2*índice + 1 </Text>

		<Paragraph>De forma semelhante 2*índice +2 retorna o filho da direita.</Paragraph>

		<Paragraph>
		  Com sua max-heap criada, esta pode ser operada como uma
		  fila de prioridade, onde três operações existem:
		</Paragraph>

		  <SubCard>
		<Text>Imagem de cada uma?</Text>
		<Text style={{marginBottom: 10}}>
		  1 - Inserir: insere o valor e calcula a possibilidade deste
		      novo valor ter quebrado uma das regras da Max-heap</Text>

		<Text style={{marginBottom: 10}}>
		  2 - PopFront: Remove o maior valor localizado no índice
		      0 do vetor/árvore
		</Text>

		<Text>
		  3 - Aumentar valor: Dado o índice e valor desejado,
	          o valor é inserido e a estrutura faz as devidas checagens.
		</Text>

		</SubCard>
		<Paragraph>
		  Note que nesse caso,
	          os valores de cada nó determinam
		  a prioridade destes. Por causa da natureza da max-heap, o maior valor
		  SEMPRE estará no topo.
		</Paragraph>
		</Card>
		</ScrollView>
	  );
	  
      };

const style_text = StyleSheet.create (
    {
	text: {
	    fontSize: 26,
	    textAlign: "left",
	    fontWeight: "bold",
	    paddingBottom: 3,
	    fontFamily:  "sans-serif-thin",
		color: '#2089dc'
	},
	section : {
	    borderBottomColor: "black",
	    borderBottomWidth: StyleSheet.hairlineWidth,
	    paddingTop: 4,
	    paddingLeft: 20,
	},
	paragraph : {
	    textAlign : "justify",
	    margin: 5,
	    paddingLeft: 3,
		fontSize: 16
	},
	card:{
		backgroundColor: 'white',
		margin: 5,
		borderRadius: 5,
		padding: 10,
	},
	subCard:{
		backgroundColor: '#bebebe',
		margin: 5,
		borderRadius: 5,
		padding: 10,
		color: 'white'
	}
		
    });
export default HeapTutorialScreen;






