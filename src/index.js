import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyB_zm0K9pV_-G0SL2MO6EMWwrmf2pEs-TM';

// create a new component. This component should produce some HTML
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's HTML generated and put it on a page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));