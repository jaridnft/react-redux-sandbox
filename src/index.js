import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyAqUpMZhYgIdsT8MZb0qW8TYH0a4mjs9Qw';

// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and place in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
