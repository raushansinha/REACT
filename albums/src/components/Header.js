//Import Library

import React, { Component } from 'react'; // handles components to make them work togather
import { Text } from 'react-native'; // Take component output to place it on control, 
                                                 //proviedes default core components (image, text)

//Create a component

const Header = () => {

  return <Text> Albums! </Text>;
};


//Make component available to other parts of this application (export)
 
export default Header;
