import React from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native';
import { Style } from '../components/Theme';
import Text from '../components/CustomText';
const {width, height} = Dimensions.get("window")

export const Section = (props) =>
      {
	  return (
			  <View style = {[style_text.section, props.viewStyle]}>
			  <Text style = {[style_text.text, props.textStyle]}>
		  {props.children}
		</Text>
	      </View>
	  );
      };

export const Picture = (props) =>
      {
	  return (
			  <Image style={[{flex: 1, resizeMode: 'contain', maxWidth: width-35}, props.style]} source={props.source}/>
	  );
      };

export const Paragraph = (props) =>
      {
	  return (

	      <Text style={style_text.paragraph}>{props.children}</Text>
	  );
      };

export const Card = (props) =>
      {
	  return (

			  <View style={[style_text.card, Style.card]}>{props.children}</View>
	  );
      };

export const SubCard = (props) =>
      {
	  return (

	      <View style={style_text.subCard}>{props.children}</View>
	  );
      };


const style_text = StyleSheet.create (
    {
	text: {
	    fontSize: 26,
	    textAlign: "left",
	    fontWeight: "bold",
	    paddingBottom: 3,
	    fontFamily:  "sans-serif-thin",
		color: '#2089dc'
	},
	section : {
	    borderBottomColor: "black",
	    borderBottomWidth: StyleSheet.hairlineWidth,
	    paddingTop: 4,
	    paddingLeft: 20,
	},
	paragraph : {
	    textAlign : "justify",
	    margin: 5,
	    paddingLeft: 3,
		fontSize: 16
	},
	card:{
		backgroundColor: 'white',
		margin: 5,
		borderRadius: 5,
		padding: 10,
	},
	subCard:{
		backgroundColor: '#bebebe',
		margin: 5,
		borderRadius: 5,
		padding: 10,
		color: 'white'
	}
		
    });
