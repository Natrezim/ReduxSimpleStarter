import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUGZujqvhPjk_RQzDXUC9tyur2TwdS514';

// Create a new Component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on a the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));