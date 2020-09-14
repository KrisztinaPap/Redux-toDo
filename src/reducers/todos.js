import { v4 as uuidv4 } from 'uuid';

const toDosReducer = ( state =[], action ) => {
    switch ( action.type ) {
        case 'ADD_NEW_TO_DO':
            const newTask = {
                id: uuidv4(),
                task: action.payload
            }
            const newToDoList = [...state];
            newToDoList.push( newTask );
            return newToDoList;
        case 'REMOVE_TO_DO':
            const updatedToDoList = state.filter( toDo => toDo.id !== action.payload );
            return updatedToDoList;
        default:
            return state;
    }
}

export default toDosReducer;