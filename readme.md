# REACT
Install NODE

Install react using
npm install -g create-react-native-app

create new project
create-react-native-app AwesomeProject

cd AwesomeProject
npm start

run app using
react-native run-ios


# Redux in React-Native

# App.js

import reducers from ./reducers
impprt { provider } from 'react-redux'; 

<provider store = {createStore(reducers)}>
  <View />
</provider>

# reducers/ LibraryReducer.js
    import data from './LibraryList.json'
    
    const initialState = data;
    export default (state = initialState, action) => {
      switch(action.type) {
        case 'ADD_LINRARY':
        
        default:
        return state;
      }
    }
  
# reducers/index.js

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combileReducers({
  //list of reducers
  libraries: libraryReducer,
  selectedLibraryId: SelectionReducer
});

# Pulling data from store to component
ListItem.js


rendeItem(library) {
  return <ListItem library={library} />;
}

<FlatList
    data={this.props.libraries}
    renderItem={this.renderItem}
    keyExtractor= {(library) => library.id }
 />

const mapStateToProps = state => {
  return { libraries: state.libraries }; // this will add libraries to props of the component
}

export default connect(mapStateToProps)(componentName)

# Adding Action creators

actions/index.js

export const selectLibrary = (libraryId) => {   // not export default as we are goining to export many actions from this file and import a "import * as actions from actions"
  return {
    type: 'select_library'
    payload: libraryId
}

# Select Actions in component
import * as actions from './actions'

//dispatch action 
<Button
  onPress = {() => this.props.selectLobrary(this.props.libraries.id)}
/>

<TouchableWithoutFeedback onPress = {() => this.props.selectLobrary(this.props.libraries.id)) => }>
  //content
</TouchableWithoutFeedback>
export default connect(mapStateToProps, actions)(componentName)

# Creating mapStateToProps with ownProps


const mapStateToProps = state => {
  return { selectedLobraryId: state.selectedLobraryId }; // this will add selectedLobraryId to props of the component
}

#  ownProps is the props of current compoent (same as this.props)

const mapStateToProps = (state, ownProps) => {   // ownProps is the props of current compoent
  expanded = state.selectedLobraryId === ownProps.library.id
  return { expanded }; 
}

