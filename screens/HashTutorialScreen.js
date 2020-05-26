import React from 'react';
import { ScrollView } from 'react-native';
import { Style } from '../components/Theme';
import Text from '../components/CustomText';
import { Section, Picture, Paragraph, Card, SubCard } from '../components/TutorialComponents';

export default class HashTutorialScreen extends React.Component {
	constructor(props){
		super(props);
	}
	
    render(){
		return(
		<ScrollView style={Style.simulationView}>
		<Card>
			<Section>Uma breve explicação</Section>
			<Paragraph>
				A Tabela Hash é uma estrutura de dados de dados especial, que
				associa chaves de pesquisa à valores. Com a finalidade de promover uma busca
				eficiente e tem como vantagem: 
			</Paragraph>
			  <SubCard>
		<Text style={{marginBottom: 10}}> 1 - Alta eficiência no custo de pesquisa, que é O(1) para o caso
		médio.  </Text>
		<Text> 2 - Simplicidade de implementação. </Text>
			  </SubCard>
		</Card>

		<Card>
		<Section>A simulação</Section>
			<Paragraph>O primeiro passo para fazer a simulação da Tabela Hash é clicar em "NOVO", sendo aberta 
				após o clique uma caixa de Diálogo, como mostrado abaixo, solicitando que o usuário insira o
				tamanho da estrutura,ou seja, a quantidade de posições que terá a nova Tabela Hash. 
			 </Paragraph>

		<Picture style={{maxHeight: 200}} source={require('../images/inserir.png')}/>
		  
		<Paragraph>
			Com a Tabela Hash criada, é hora de simular as operações disponíveis: "Inserir", "Remover" e "Buscar".
			Para isso, basta clicar na operação desejada e inserir o valor escolhido na caixa de entrada :
			"Valor da operação." Com todos os passos anteriores concluídos, basta apertar no botão "Confirmar"
			para conseguir ver a simulação da Tablea Hash em execução, sendo mostrado cada estapa que está 
			executada pela Estrutura na caixa de texto cinza de forma dinâmica e intuitiva.
		</Paragraph>

		<Picture style={{maxHeight: 100}} source={require('../images/construirHeap.png')}/>
		  
		</Card>

		<Card>
		<Section>Passo a Passo</Section>
		  <Paragraph>
			Para fixar como funciona a simulação da Tabela Hash, 
			abaixo encontra-se um passo a passo bem simples e didático.
		  </Paragraph>
		  <SubCard>
		<Text>Imagem de cada uma?</Text>
		<Text style={{marginBottom: 10}}>
		  1 - Novo: Clicar em novo para a criação de uma nova Tabela Hash</Text>
		<Text style={{marginBottom: 10}}>
		  2 - Tamanho: Preencher a caixa de Diálogo com o tamanho da nova Tabela Hash (número de posições da tabela).
		</Text>
		<Text style={{marginBottom: 10}}>
		  3 - Operação: Escolher a operação que você deseja simular: "Inserir","Remover" ou "Buscar".
		</Text>
		<Text style={{marginBottom: 10}}>
		  4 - Chave: Digitar o valor no qual você deseja implementar na simulação (Número inteiro).
		</Text>
		<Text style={{marginBottom: 10}}>
		  5 - Confirmar: Clicar no botão "Confirmar" para a simulação ser executada.
		</Text>

		</SubCard>
		
		</Card>

				</ScrollView>
		);
    }
}
