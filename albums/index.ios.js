/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Import a library to help create a component

import React from 'react'; // handles components to make them work togather
import { AppRegistry, View } from 'react-native'; // Take component output to place it on control, 
                                            // proviedes default core components (image, text)
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//Create a component

// const App = () => {
//   return (

//     //JSX - extention of java script, similar to HTML
//     <Text>Some Text</Text> 
//   );
// };

//Same as above

const App = () => (
  <View style={styles.AlbumList}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//flex:1 at root required to make content scrollable
const styles = {
  rootStyle: {
    flex: 1
  }
}
//Render it to the device
 
 AppRegistry.registerComponent('albums', () => App); // Only root component uses AppRegistry
