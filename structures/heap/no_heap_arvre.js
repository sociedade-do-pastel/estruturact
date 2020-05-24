import React from 'react';
import {View, Text} from 'react-native';
import {Style} from '../../components/Theme';

const sizeMultiplier = 2;

const No = props =>
      {
	  return (
		  <View>
			  <Text style={props.index === "" ? {} : Style.heapNodeIndex}>
			  {"" || props.index}
		      </Text>
			  <Text style={[props.valor === "" ? {} : Style.arvreNodeNumber, {fontSize: 22-(props.dist*sizeMultiplier), paddingTop: 10-(props.dist*sizeMultiplier), paddingBottom: 10-(props.dist*sizeMultiplier), paddingLeft: 20-(props.dist*sizeMultiplier),	paddingRight: 20-(props.dist*sizeMultiplier)}]}>
			  {props.valor || " "}
		      </Text>
		  </View>
	  );
      };

export default No;
