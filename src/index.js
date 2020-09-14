import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';
import { addNewToDo } from './actions/todos';
import { Provider } from 'react-redux';
import ToDos from './components/ToDos';

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
      <ToDos />
    </>
  </Provider>,
  document.getElementById('root')
);