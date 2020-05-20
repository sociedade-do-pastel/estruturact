import React from 'react';
import {FlatList} from 'react-native';
import No from './no_heap.js';

const Listinha = props =>
      {
	  console.log(props.lista);
	  return (
	      <FlatList
		data={props.lista}
		renderItem={({item}) =>
			    
				    <No
					  index={props.lista.indexOf(item)}
					  valor={item["valor"]}></No>


				    }
				    horizontal={true}
				    key={item => item["key"]}
		/>

	  );

      };

export default Listinha;









