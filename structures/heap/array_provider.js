import React from "react";

export const ArrayContext = React.createContext ();
import Listinha from './listinha.js';
import buildMaxHeap from './heap.js';
export default class ArrayProvider extends React.Component
{
    state = {
	array_atual: [],
	is_heap: false,
	bin_heap : [],
    };


    /*
     * Menos "perigoso" trabalhar com a cópia do vetor
     * passado pelo usuário
     */
    adicionarNum = (numero_inserido) =>
	{

	    if (!numero_inserido)
		return ;
	    else
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
			      }
			     );
	    }
	}




    acharIndice = (num, vetor) =>
	{
	    for (let j = (vetor.length - 1);
		 j >= 0;
		 j--)
	    {
		if (vetor[j].valor == num)
		    return j;
	    }
	    return -1;
	};
    
    apagarItem = (indice, vetor) =>
	{
	    if (indice < 0)
		return undefined;
	    
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
	    let vetor_temp = Object.assign ([], this.state.array_atual);
	    
	    this.setState ({
		    array_atual: this.apagarItem (
		this.acharIndice (numero_inserido, vetor_temp),
		    vetor_temp) || this.state.array_atual
		});
	};
    
    construirHeap = () =>
	{

	    let array_temp = Object.assign ([], this.state.array_atual);
	    this.setState(
	    	(estado_anterior) =>
	    	    {
	    		return {
	    		    is_heap: true, 
	    		    bin_heap: buildMaxHeap(
	    			array_temp
	    		    ),
	    		};

	    	    });
	};
	    
    render ()
    {
	return (
	    <ArrayContext.Provider
	      value={{
		  adicionar: this.adicionarNum,
		  remover: this.removerNum,
		  vetor_apresentado: this.state.array_atual,
		  heap: this.state.bin_heap,
		  construir: this.construirHeap,
	      }}>
	      {this.props.children}
	    </ArrayContext.Provider>

	);
    }
}








