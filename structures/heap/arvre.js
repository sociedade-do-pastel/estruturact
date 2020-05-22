import React, {useState} from "react";
import {View} from "react-native";
import No    from "./no_heap.js";



const ArvoreHeap = (props) =>
      {
	  const [arvore_atual, modificar_arvore] = useState(
	      criarArvore(props.heap));

	  return (
	      <View>
	      </View>
	  );
      };

const criarArvore = (heap) =>
      {

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

				  return (<No index={heap[count].id} valor={heap[count].valor}></No>);
			      else
				  return (<No index="" valor=""></No>);
			  })()
		  );

	      }
	      vetor_de_niveis.push (vetor_tmp);
	      if (!heap[count]) // item mais a esquerda for undefined
		  break;
	  }
	  return vetor_de_niveis;
      };


export default ArvoreHeap;















