import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import NotesApp from './components/NotesApp';


ReactDOM.render(
  <React.StrictMode>
  {/* <App /> */}
   <NotesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
