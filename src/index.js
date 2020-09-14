import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';
import { Provider } from 'react-redux';
import ToDos from './components/ToDos';
import ToDoList from './components/ToDoList';

const store = createStore(
  toDosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => console.log( store.getState() ) );

store.dispatch( addNewToDo( "Research Redux" ) );
store.dispatch( addNewToDo( "Eat lunch" ) );

ReactDOM.render(
  <Provider store={ store }>
    <>
    <h1>React-Redux To-Do List ( TECHCareers)</h1>
      <ToDos />
      <ToDoList />
    </>
  </Provider>,
  document.getElementById('root')
);