import React from 'react';
import styled from 'styled-components';
import { SiteTitle } from '../components/Atoms/Title';
import { Button } from '../components/Atoms/Button';
import { TodosListGroup } from '../components/Molecules/TodosList';


const Dashboard = () => {
    return (
        <StyledContainer>
            <div className="title-container">
                <SiteTitle text='Todo List' />
                <Button text='Add new' />
            </div>
            <TodosListGroup />
        </StyledContainer>
    )
}

export default Dashboard;

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: ${props => props.theme.spaceMedium};

    .title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
` 