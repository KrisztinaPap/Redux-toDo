const addNewToDo = toDoContent => {
    return {
        type: 'ADD_NEW_TO_DO',
        payload: toDoContent
    };
}

const removeToDo = id => {
    return {
        type: 'REMOVE_TO_DO',
        payload: id
    }
}

export { addNewToDo, removeToDo };