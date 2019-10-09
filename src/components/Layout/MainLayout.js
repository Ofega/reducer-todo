import React from 'react';
import styled from 'styled-components';
import SideNav from './SideNav';
import AppRouter from './AppRouter';
import AddTodosModal from '../Molecules/AddTodos';


const MainLayout = () => {
    return (
        <StyledContainer>
            <SideNav />
            <AppRouter />
            <AddTodosModal />
        </StyledContainer>
    )
}

export default MainLayout;

const StyledContainer = styled.main`
  display: flex;
  height: 100vh;
  overflow: hidden;
` 