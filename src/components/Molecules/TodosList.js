import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../Atoms/Card';
import TodosContext from '../../store/contexts/DashboardContext';


export const TodosListGroup = () => {

    const context = useContext(TodosContext);

    return (
        <TodosList>
            {
                context.todos.map(todo => {
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
