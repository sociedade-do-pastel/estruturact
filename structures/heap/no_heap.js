import React from 'react';
import {View, Text} from 'react-native';
import {Style} from '../../components/Theme';

const No = props =>
      {
	  return (
		  <View>
			  <Text style={props.index === "" ? {} : Style.heapNodeIndex}>
			  {"" || props.index}
		      </Text>
			  <Text style={props.valor === "" ? {} : Style.heapNodeNumber}>
			  {props.valor || " "}
		      </Text>
		  </View>
	  );
      };

export default No;








