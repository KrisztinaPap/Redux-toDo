const toDosReducer = ( state =[], action ) => {
    switch ( action.type ) {
        case 'ADD_NEW_TO_DO':
            const newTask = {
                task: action.payload
            }
            const newToDoList = [...state];
            newToDoList.push( newTask );
            return newToDoList;
        default:
            return state;
    }
}

export default toDosReducer;