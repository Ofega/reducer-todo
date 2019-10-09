import React, { useReducer } from 'react';
import styled from 'styled-components';
import { SiteTitle } from '../components/Atoms/Title';
import { TodosListGroup } from '../components/Molecules/TodosList';
import { initialTodos, todosReducer } from '../store/reducers/todos';
import TodosContext from '../store/contexts/TodosContext';


const Dashboard = () => {

    const [todos, dispatch] = useReducer(todosReducer, initialTodos); 

    return (
        <StyledContainer>
            <TodosContext.Provider value={todos}>
                <SiteTitle text='Projects' />
                <TodosListGroup />
            </TodosContext.Provider>
        </StyledContainer>
    )
}

export default Dashboard;

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: ${props => props.theme.spaceMedium};
` 