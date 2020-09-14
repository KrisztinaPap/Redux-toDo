import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';

const store = createStore( toDosReducer );


ReactDOM.render(
  <React.StrictMode>
    Hey
  </React.StrictMode>,
  document.getElementById('root')
);