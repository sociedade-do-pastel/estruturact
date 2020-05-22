import React from 'react';
import {View, Text} from 'react-native';

const No = props =>
      {
	  return (
	      <View>
		<Text>
		  {"" || props.index}
		</Text>
		<Text>
		  {props.valor || " "}
		</Text>
	      </View>
	  );
      };

export default No;








