/*
 * DISCLAIMER:Por apresentar uma forma muito peculiar de organização de seus elementos,
 * fui praticamente obrigado a implementar a estrutura Heap sem me utilizar 
 * das funções built-in do JS. Não sei se existe uma biblioteca 
 * para gerar um max-heap, entretanto.
 * 
 * Por fim, me baseei no livro "Introducion to algorithms" para desenvolver esta
 * estrutura. Note que aqui os arrays são tratados como tendo início em "0"
 * e não 1. A maior dificuldade, inclusive, foi convertê-la para trabalhar com 
 * índices em 0;
 *
 * PS: Se o professor eventualmente passar esta estrutura de dados e a dele
 * se distinguir em algum aspecto, a culpa é do livro.
 */


const left = (indice) =>
      {
	  return 2*indice + 1;
      };

const right = (indice) =>
      {
	  return 2*indice + 2;
      };

// onde a magia acontece
// note que o tamanho é tratado como tam - 1
// para limitar o range em que um indice
// pode estar. 
const maxHeapify =  (vetor, indice) =>
      {
	  let left_child  = left (indice),
	      right_child = right (indice), 
	      maior       = indice,
	      tamanho     = vetor.length - 1;
	  
	  if (left_child <= tamanho
	      && vetor[left_child].valor > vetor[indice].valor)
	      maior = left_child;
	  // NÃO TORNAR ISSO UM ELSE IF 
	  if (right_child <= tamanho
		   && vetor[right_child].valor > vetor[maior].valor)		
	      maior = right_child;

	  // por PIF os vetores já têm seus IDs
	  // respectivamente organizados,
	  // confio no front-end
	  if (maior != indice)
	  {
	      // exchange a la bubblesort, isso é muito nojento
	      let temp         = vetor[indice],
		  temp_id      = vetor[maior].id;
	      vetor[indice]    = vetor[maior];
	      vetor[indice].id = temp.id;
	      vetor[maior]     = temp;
	      vetor[maior].id  = temp_id;
	      maxHeapify (vetor, maior); // passada a subárvore recursivamente
	  }
	  return vetor;
      };

const buildMaxHeap = (vetor_temp) => 
      {
	  let tamanho = vetor_temp.length - 1;
	  for (let i = (Math.floor(tamanho/2));
	       i >= 0 
	       ; --i)
	      maxHeapify(vetor_temp, i);

	  return vetor_temp;
      };

export default buildMaxHeap;
export {maxHeapify};



