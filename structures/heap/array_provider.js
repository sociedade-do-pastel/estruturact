import React from "react";

export const ArrayContext = React.createContext ();
import Listinha from './listinha.js';
export default class ArrayProvider extends React.Component
{
    state = {
	array_atual: [],
	arvore_gerada : undefined,
	is_tree: false,
	bin_heap : [],
    };
    
    checkArvore = () => 
	{
	    console.log(this.state.array_atual);
	};
    
    adicionarNum = (numero_inserido) =>
	{

	    if (!numero_inserido)
		return ;
	    else
	    {
		this.setState((estado_anterior) =>
			      {
				  return {
				      array_atual:[...this.state.array_atual, {valor: +numero_inserido, id: this.state.array_atual.length}  ]
				  };
			      },
			      this.checkArvore );
	    }
	}




    acharIndice = (num, vetor) =>
	{
	    for (let j = (vetor.length - 1);
		 j >= 0;
		 j--)
	    {
		console.log(j);
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
	    let vetor_temp = this.state.array_atual;

	    console.log(this.apagarItem (
		this.acharIndice (numero_inserido, vetor_temp),
		vetor_temp));
	    
	};
	    
    render ()
    {
	return (
	    <ArrayContext.Provider
	      value={{
		  adicionar: this.adicionarNum,
		  remover: this.removerNum,
		  vetor_apresentado: this.state.array_atual,
		  is_arvore: this.state.is_tree,
	      }}>

	      {this.props.children}
	    </ArrayContext.Provider>

	);
    }
}








