import React        from "react";
import Listinha     from './listinha.js';
import buildMaxHeap from './heap.js';
import {maxHeapify} from './heap.js';

export const ArrayContext = React.createContext ();
export default class ArrayProvider extends React.Component
{

    state = {
	array_atual     : [],
	is_heap         : false,
	bin_heap        : [],
	mensagem_user   : "",
    };

    constructor (props)
    {
	super (props);
	const estado_original = {};
    }
    
    // OBS: AMBAS FUNÇÕES ABAIXO APENAS OPERAM NO VETOR DO USUÁRIO
    adicionarListaUsuario = (numero_inserido) =>
    {
	this.setState ((estado_anterior) =>
		       {
			   return {
			       array_atual:[...this.state.array_atual,
					    {
						valor: +numero_inserido,
						id: this.state.array_atual.length
					    }]
			   };
		       });
    };
    
    apagarListaUsuario = (numero_inserido) =>
	{
	    let vetor_temp = Object.assign ([], this.state.array_atual);
	    
	    this.setState ({
		    array_atual: this.apagarItem (
		this.acharIndice (numero_inserido, vetor_temp),
		    vetor_temp) || this.state.array_atual
		});

	};
    
    // dois estados existem: pré heap criada e pós heap criada
    // basicamente enquanto o usuário não pede para que se
    // tenha uma heap baseada no vetor dado por ele, todo objeto
    // será inserido no vetor pro usuário, o qual seria convertido
    // posteriormente em uma max-heap. A partir de sua geração
    // a heap passa a ser tratada como fila prioritária
    adicionarNum = (numero_inserido) =>
	{
	    if (!numero_inserido)
		return ;
	    else if (this.state.is_heap)
		this.inserirHeap (numero_inserido);
	    else
		this.adicionarListaUsuario (numero_inserido);
	}

    
    acharIndice = (num, vetor) =>
	{
	    // yay busca linear
	    for (let j = (vetor.length - 1);
		 j >= 0;
		 j--)
	    {
		if (vetor[j].valor == num)
		    return j;
	    }
	    return -1; // se não achado mostrar uma mensagem?
	};

    
    apagarItem = (indice, vetor) =>
	{
	    if (indice < 0)
		return undefined;
	    // gambiarra que joga o item achado pra
	    // última posição
	    for (let j = indice;
		 j < (vetor.length -　1);
		 j++)
	    {
		vetor[j].valor = vetor[j+1].valor;
		vetor[j].id = (vetor[j+1].id - 1);
	    }
	    vetor.pop ();
	    return vetor;
	};
    
    removerNum = (numero_inserido) =>
	{
	    if (!numero_inserido)
		return ;
	    else if (this.state.is_heap)
		this.popHeap ();
	    else
		this.apagarListaUsuario (numero_inserido);
	};

    // novamente, importante realizar as operações sobre uma cópia
    construirHeap = () =>
	{
	    let array_temp = Object.assign ([], this.state.array_atual);
	    this.setState(
	    	(estado_anterior) =>
	    	    {
	    		return {
	    		    is_heap: true, 
	    		    bin_heap: buildMaxHeap (
	    			array_temp
	    		    ),
	    		};
	    	    });
	};

    // operações sobre a heap criada -> priority queue
    popHeap = () =>
	{
	    if (!this.state.bin_heap.length)
		return ; // talvez produzir uma mensagem de erro animada?

	    this.setState(
		(estado_anterior) =>
		    {
			return {
			    bin_heap: (() =>
				       {
					   let heap_temp = Object.assign ([], this.state.bin_heap);
					   let tam       = heap_temp.length - 1;
					   // alterar o valor diretamente não causa
					   // warnings relacionados a keys
					   // provavelmente mais rápido também
					   heap_temp[0].valor = heap_temp[tam].valor; 
					   heap_temp[0].id    = 0;
					   heap_temp.pop ();
					   return maxHeapify (heap_temp, 0);
				       })()
			};
		    });
	};

    // a palavra "value" faz mais sentido que key nesse caso
    heapIncreaseValue = (index, num, vetor_opcional=undefined) =>
	{
	    // https://stackoverflow.com/questions/7956601/heap-sort-get-parent
	    // trabalhar com array com inicio em 1 é de fato, mais fácil
	    const parent = (i, array) =>
		  {
		      let indice_retorno = Math.floor ((i - 1) / 2);
		      if (indice_retorno <= 0)
			  return 0;

		      return indice_retorno;
		  };
	    
	    let heap_temp = vetor_opcional || Object.assign ([], this.state.bin_heap);

	    if (num < heap_temp[index].valor)
		return undefined; // mais um caso para mostrar erro

	    heap_temp [index].valor = +num;

	    
	    for( ;index >= 0
		 && heap_temp[parent(index)].valor < heap_temp[index].valor;
		 )
	    {
		console.log(heap_temp[parent(index)].valor + "  " + heap_temp[index].valor);
		// oh no
		// não é mais fácil chamar maxHeapify novamente?
		let temp            = heap_temp[index],
		    temp_id         = heap_temp[parent(index)].id;
		heap_temp[index]    = heap_temp[parent(index)];
		heap_temp[index].id = temp.id;
		heap_temp[parent(index)]     = temp;
		heap_temp[parent(index)].id  = temp_id;
		console.log("index " + parent(index));
		index = parent(index);
	    }

	    console.log (heap_temp);
	    return heap_temp;

	};
    
    inserirHeap = (numero_inserir) =>
	{
	    
	    this.setState( (estado_atual) =>
			   {
			       return {
				   bin_heap: (() =>
				       {
					   return this.heapIncreaseValue (this.state.bin_heap.length,
									  numero_inserir,
									  Object.assign ([],
									  [...this.state.bin_heap, {
									      valor: Number.NEGATIVE_INFINITY,
									      id: this.state.bin_heap.length}]));
				       })()
			       };
			   }
	    );
	};
    
    render ()
    {
	return (
	    <ArrayContext.Provider
	      value={{
		  adicionar        : this.adicionarNum,
		  remover          : this.removerNum,
		  vetor_apresentado: this.state.array_atual,
		  vetorPreenchido  : this.state.array_atual.length === 0 ? false : true,
		  heap             : this.state.bin_heap,
		  construir        : this.construirHeap,
		  is_heap          : this.state.is_heap,
		  mensagem_user    : this.mensagem_user
	      }}>
	      {this.props.children}
	    </ArrayContext.Provider>

	);
    }
}








