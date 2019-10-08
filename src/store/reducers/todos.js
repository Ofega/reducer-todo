import uuid from 'uuid';

export const initialTodos = [
    {
        id: uuid(), 
        name: 'Bathe the Dog', 
        isCompleted: false 
    },
    {
        id: uuid(), 
        name: 'Attend Lambda Lectures', 
        isCompleted: false 
    },
    {
        id: uuid(), 
        name: 'Work on Dev Diary', 
        isCompleted: false 
    }
]

export const todosReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}