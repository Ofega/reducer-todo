import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../Atoms/Card';
import TodosContext from '../../store/contexts/TodosContext';


export const CardListGroup = () => {

    const todos = useContext(TodosContext);

    return (
        <StyledContainer>
            {
                todos.map(item => {
                    return (
                        <Card item={item} />
                    )
                })
            }
        </StyledContainer>
    )
}


const StyledContainer = styled.ul`

`