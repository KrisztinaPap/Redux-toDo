import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewToDo } from '../actions/todos';

function ToDos ( props ) 
{
    const [ newTask, setNewTask ] = useState( "" );

    const submitToDo = event => {
        event.preventDefault();
        props.dispatch( addNewToDo( newTask ) );
    }

    return (
        <>
            <h2>To-Do Form</h2>
            <form onSubmit= { submitToDo }>
                <label htmlFor="task">Enter New Task:</label>
                <input 
                    id="task" 
                    type="text" 
                    value={ newTask } 
                    onChange={ event => { setNewTask (event.target.value ); } } />
                <input type="submit" value="Add" />
            </form>
        </>
    );
}

export default connect(
    state => { return { toDos: state } }
)(ToDos);