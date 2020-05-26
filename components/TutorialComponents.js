import React from 'react';
import { View, Image, Text } from 'react-native';
import { Style } from '../components/Theme';

export default class CustomText extends React.Component{
	render(){
		return (		
				<Text style={[Style.tutorialText, this.props.style]}>{this.props.children}</Text>
		);
	}
};

export const Section = (props) =>
      {
	  return (
		<View style = {[Style.tutorialSectionView, props.viewStyle]}>
			  <CustomText style = {[Style.tutorialSectionText, props.textStyle]}>
		      {props.children}
		      </CustomText>
	    </View>
	  );
      };

export const Picture = (props) =>
      {
	  return (
		  <Image style={[Style.tutorialPicture, props.style]} source={props.source}/>
	  );
      };

export const Paragraph = (props) =>
      {
	  return (

	      <CustomText style={Style.tutorialParagraph}>{props.children}</CustomText>
	  );
      };

export const Card = (props) =>
      {
	  return (

		  <View style={[Style.tutorialCard, Style.card]}>{props.children}</View>
	  );
      };

export const SubCard = (props) =>
      {
	  return (

	      <View style={Style.tutorialSubCard}>{props.children}</View>
	  );
      };
