import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../Atoms/Card';
import TodosContext from '../../store/contexts/TodosContext';


export const TodosListGroup = () => {

    const todos = useContext(TodosContext);

    return (
        <TodosList>
            {
                todos.map(todo => {
                    return (
                        <Card key={todo.id} todo={todo} />
                    )
                })
            }
        </TodosList>
    )
}


const TodosList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${props => props.theme.spaceMedium}
    margin-top: ${props => props.theme.spaceLarge}
`
