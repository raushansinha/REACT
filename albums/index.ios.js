/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Import a library to help create a component

import React, { Component } from 'react'; // handles components to make them work togather
import { AppRegistry } from 'react-native'; // Take component output to place it on control, proviedes default core components (image, text)
import Header from './src/components/Header'
//Create a component

// const App = () => {
//   return (

//     //JSX - extention of java script, similar to HTML
//     <Text>Some Text</Text> 
//   );
// };

//Same as above

const App = () => (
  <Header></Header>
)
//Render it to the device
 
 AppRegistry.registerComponent('albums', () => App); // Only root component uses AppRegistry
