const addNewToDo = toDoContent => {
    return {
        type: 'ADD_NEW_TO_DO',
        payload: toDoContent
    };
}