//Import Library

import React from 'react'; // handles components to make them work togather
import { Text, View } from 'react-native'; // Take component output to place it on control, 
                                           //proviedes default core components (image, text)
//FlexBox  - Used to position elemnts in a contaier (eg Text in View)
//default position is TOP-LEFT

//Create a component, a functional components includes a function which returns value

const Header = (props) => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',   //used for Verticle positioning
    alignItems: 'center',   //used for Horizontal positioning
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make component available to other parts of this application (export)
 
export  { Header };
