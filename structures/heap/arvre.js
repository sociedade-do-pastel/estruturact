import React, {useState, useEffect, Styl} from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import No    from "./no_heap.js";


const criarArvore = (heap_passada) =>
      {
	  let heap = Object.assign ([], heap_passada);

	  // 99, 58, 69,
	  let vetor_de_niveis = [];
	  for (let i = 0, count = 0 ;
	       i < heap.length ;
	       i++)
	  {
	      let vetor_tmp = [];
	      // aqui vem a mega gambiarra
	      // maximo de itens num nivel (arvore bin) = 2^n no caso i
	      // aqui a iteração = distancia para a raiz,
	      // heaps são semi completas
	      // count + j = range de um nível
	      // deve ter uma forma mais fácil de fazer isso

	      for (let j = count;
		   count < j + Math.pow(2, i);
		   count++)
	      {
		  vetor_tmp.push (
		      (() =>
		       {
			      if (heap[count])

				  return ({
				      key:   count,
				      index: heap[count].id,
				      valor: heap[count].valor
				  });
			      else
				  return ({
				      key:   count,
				      index: "",
				      valor: ""
				  });
			  })()
		  );

	      }
	      vetor_de_niveis.push (vetor_tmp);
	      if (!heap[count]) // item mais a esquerda for undefined
		  break;
	  }
	  return vetor_de_niveis;
      };


export default class ArvoreHeap extends React.Component
{
    constructor (props)
    {
	super (props);
	this.state = {arvore_heap: []};
    }

    componentDidUpdate (prevProps)
    {
	if (this.props.heap != prevProps.heap)
	{
	    this.setState (
		{
		    arvore_heap: criarArvore (this.props.heap)
		}
	    );
	}
    }
    
    render ()
    {
	const vetor_arvre = this.state.arvore_heap.map(
	    linhas_arvre =>
		{
		    return (
			<View style={styles.linhas}>
			  {
			      linhas_arvre.map(nos =>
					       <No
						     key={nos.key}
						     index={nos.index}
						     valor={nos.valor}
						     style={{flex:1}}></No>)
			  }
			</View>
		    );
		});
	return (
	    <View style={styles.container}>
	      {vetor_arvre}
	    </View>
	);

    }

};


const styles = StyleSheet.create({
    container: {
	flexDirection: "column",
	justifyContent: "center",
    },
    linhas: {
	flexDirection: "row",
	justifyContent: "space-evenly",
    }
});












