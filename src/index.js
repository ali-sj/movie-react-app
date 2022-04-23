import React from 'react';
import ReactDOM from 'react-dom';
import ProviderContexMovie from './context/movieContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ProviderContexMovie>
        <App />
    </ProviderContexMovie>
  
  </React.StrictMode>,
  document.getElementById('root')
);


