import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeContext} from './Theme';

export default class ThemeButton extends React.Component {
	render(){
		return(
			<ThemeContext.Consumer>
				{({theme, toggleTheme}) => (
				 <Icon.Button
				 name="palette"
				 size={20}
				 onPress={toggleTheme}
				 color={theme.colors.text}
				 backgroundColor={theme.colors.primary}/>
				)}
		    </ThemeContext.Consumer>	
		);
	}
}
