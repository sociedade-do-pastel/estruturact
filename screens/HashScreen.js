import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols,	Cell } from 'react-native-table-component';

import SimulationView from '../components/SimulationView';
import DialogHash from '../components/DialogHash';
import { Style } from '../components/Theme';

export default class HashScreen extends React.Component {
	constructor(props){
		super(props);
		this.state={
			editable: false,
			HeadTable: '',
			DataTable: [],
			numero:'',
			NumPosicoes:'',
			widthArr:'',
		};
		
		this.props.navigation.setOptions({
			headerRight: () => (
					<Text onPress={this.showDialog} style={Style.hashHeaderButton}>Novo</Text>
			),
		});

		this.showDialog = this.showDialog.bind(this);
		this.Hash=this.Hash.bind(this);
		this.Adiciona=this.Adiciona.bind(this);
		this.Remove=this.Remove.bind(this);
		this.Busca=this.Busca.bind(this);
		this.SetPosicoes=this.SetPosicoes.bind(this);
	}

	SetPosicoes(){
		let posicoes=this.state.NumPosicoes
		let cabecalhoTabela=[]
		let tamanhoCabecalho=[]
		let colunasIniciais=[]
		for (let contador_3=0; contador_3<posicoes; contador_3++){
			cabecalhoTabela[contador_3]='P'+contador_3
			tamanhoCabecalho[contador_3]=60
			colunasIniciais[[contador_3]]=''
		}
		this.setState({HeadTable:cabecalhoTabela,widthArr:tamanhoCabecalho})
		this.setState({DataTable:[colunasIniciais]})
	}
	
	Hash(){
		let calculoPosicao=this.state.numero % this.state.HeadTable.length;
		return calculoPosicao;
	}
	
	Adiciona(){
		let linhaNova=[];
		let elemento=this.state.numero;
		let posiçãoElemento=this.Hash();
		let alturaTabela=this.state.DataTable.length;
		let comprimentoTabela=this.state.DataTable[0].length; // Comprimento deve ser o mesmo para todas as linhas
		let tabelaCompleta=this.state.DataTable
		for (let contador=0;contador<alturaTabela;contador++){
			if (tabelaCompleta[contador][posiçãoElemento]==''){
				tabelaCompleta[contador][posiçãoElemento]=elemento
				this.setState({DataTable:tabelaCompleta})
				return
			}
		}// for para adicionar uma nova linha, caso a altura da posição que deve ser inserido o número esteja cheia completa de números.
		for (let contador2=0; contador2<comprimentoTabela;contador2++){
			linhaNova[contador2]=''
		}
		linhaNova[posiçãoElemento]=elemento
		tabelaCompleta=tabelaCompleta.concat([linhaNova])
		this.setState({DataTable:tabelaCompleta});;
	}
	
	Remove(){
		let numeroAremover=this.state.numero;
		let alturaTabela=this.state.DataTable.length;
		let tabelaCompleta=this.state.DataTable;
		let posicaoRemover=this.Hash();
		for (let contador4=0; contador4<alturaTabela; contador4++){
			if(tabelaCompleta[contador4][posicaoRemover]==numeroAremover){
				for(contador4;contador4< alturaTabela-1; contador4++){
					tabelaCompleta[contador4][posicaoRemover]=tabelaCompleta[contador4+1][posicaoRemover]
				}
				tabelaCompleta[contador4][posicaoRemover]=''
				contador4+=2
			}
		}
		this.setState({DataTable:tabelaCompleta})
	}
	
	Busca(){
		let numeroBuscar=this.state.numero;
		let alturaTabela=this.state.DataTable.length;
		let tabelaCompleta=this.state.DataTable;
		let posicaoRemover=this.Hash();
		for (let contador4=0; contador4<alturaTabela; contador4++){
			if(tabelaCompleta[contador4][posicaoRemover]==numeroBuscar){
				alert(`Número ${numeroBuscar} encontrado.`)
			}
			else{
				alert(`Número ${numeroBuscar} não encontrado.`)
			}
		}
	}
	
	showDialog(){ this.setState({isDialogVisible: true}); }
	
	render(){
		const state = this.state;
		const menu =
			  <DialogHash
		        visible={this.state.isDialogVisible}
		onConfirm={(value)=>this.setState({NumPosicoes: value, editable: true, isDialogVisible: false}, this.SetPosicoes)}
		        onCancel={()=>this.setState({isDialogVisible: false})}
			  />
			
		if(this.state.editable === false){
			return(
					<View style={Style.preHashScreen}>
					<Text onPress={this.showDialog}>Clique em novo para inserir o tamanho</Text>
					{menu}
				</View>
			);
		}
		else{
			return(
					<SimulationView
				      ref={(v) => {this.viewRef = v}}
				      insertOp={(x) => this.setState({numero: x}, this.Adiciona)}
				      removeOp={(x) => this.setState({numero: x}, this.Remove)}
				      searchOp={(x) => this.setState({numero: x}, this.Busca)}>
					
					<ScrollView horizontal={true}>
					<View>
					<Table borderStyle={Style.hashOuterTable}>
					<Row data={state.HeadTable} widthArr={state.widthArr} style={Style.hashHead} textStyle={Style.hashText}/>
					</Table>
					<ScrollView style={Style.hashDataWrapper}>
					<Table borderStyle={Style.hashInnerTable}>
					{
						state.DataTable.map((rowData, index) => (
								<TableWrapper key={index} style={Style.hashRow}  >
								{
									rowData.map((cellData, cellIndex) => (
											<Cell style={cellData==''? Style.hashEmpty: Style.hashFull} key={cellIndex} data={cellData} widthArr={state.widthArr}  textStyle={Style.hashText}/>
									))
								}
							</TableWrapper>
						))
					}
				    </Table>
					</ScrollView>
					</View>
					</ScrollView>
					{menu}					
				</SimulationView>
			);
		}
	}
}
