import uuid from 'uuid';
import { ADD_TODO, TOGGLE_MODAL } from '../types/dashboard'

export const initialState = {
    modalToggled: false,
    todos: [
        {
            id: uuid(), 
            name: 'Bathe the Dog', 
            isCompleted: false,
            tags: [
                {
                    id: uuid(),
                    text: 'Education'
                }, 
                {
                    id: uuid(),
                    text: 'Religion'
                }
            ] 
        },
        {
            id: uuid(), 
            name: 'Attend Lambda Lectures', 
            isCompleted: false,
            tags: [
                {
                    id: uuid(),
                    text: 'Spiritual'
                }
            ] 
        },
        {
            id: uuid(), 
            name: 'Work on Dev Diary', 
            isCompleted: false,
            tags: [
                {
                    id: uuid(),
                    text: 'Animal'
                },
                {
                    id: uuid(),
                    text: 'Pet'
                },
                {
                    id: uuid(),
                    text: 'Life'
                }
            ]
        }
    ]
}

export const dashboardReducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                modalToggled: !state.modalToggled
            }
            case ADD_TODO:
                return {
                    ...state,
                    todos: [ ...state.todos, {
                        id: uuid(), 
                        name: action.payload.name, 
                        isCompleted: false,
                        tags: action.payload.tags.map(item => {
                            return {
                                id: uuid(),
                                text: item
                            }
                        })
                    }]
                }
        default:
            return state;
    }
}