//Import Library

import React, { Component } from 'react'; // handles components to make them work togather
import { ScrollView } from 'react-native'; // Take component output to place it on control
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


//Class component, to call a REST api to fetch list of Albums, based on ES6 classes. 
//Used for dynamic source of data
//Used to write complex components

//const AlbumList = () => {

class AlbumList extends Component {

    state = { albums: [] }; //Initial component state, used with only class based component

    //executes as soon as component is loaded
    componentWillMount() {
        //console.log('componentWillMount');
        //debugger;
        //ASYNC HTTP request to get albums from API

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); // setState is only way to change component state
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
        //debugger;
    }

    //Mandatory to have a render method which returns some amount for JSX
    render() {
        //console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
