import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';

const store = createStore( toDosReducer );

store.subscribe( () => console.log( store.getState() ) );

store.dispatch( addNewToDo( "Research Redux" ) );
store.dispatch( addNewToDo( "Eat lunch" ) );

ReactDOM.render(
  <React.StrictMode>
    Hey
  </React.StrictMode>,
  document.getElementById('root')
);