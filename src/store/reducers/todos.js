import uuid from 'uuid';

export const initialTodos = [
    {
        id: uuid(), 
        name: 'Bathe the Dog', 
        isCompleted: false,
        tags: ['Education', 'Religion'] 
    },
    {
        id: uuid(), 
        name: 'Attend Lambda Lectures', 
        isCompleted: false,
        tags: ['Spriritual'] 
    },
    {
        id: uuid(), 
        name: 'Work on Dev Diary', 
        isCompleted: false,
        tags: ['Animal', 'Pet', 'Life']
    }
]

export const todosReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}