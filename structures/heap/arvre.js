import React, {useState} from "react";
import {View} from "react-native";
import No    from "./no_heap.js";
import {left, right} from "./heap.js";


const ArvoreHeap = (props) =>
      {
	  const [arvore_atual, modificar_arvore] = useState(
	      criarArvore(props.heap));

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
	      
	      for (let j = count;
		   j < count + Math.pow(2, i);
		   j++, count++)
	      {
		  vetor_tmp.push (
		      <No index={heap[j].id} valor={heap[j].valor}></No>
		  );
	      }
	      vetor_de_niveis.push ([<View> ,...vetor_tmp, </View>]);
	      if (!heap[count]) // item mais a direita for undefined
		  break;
	  }
	  return vetor_de_niveis;
      };















