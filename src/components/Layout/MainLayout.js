import React from 'react';
import styled from 'styled-components';
import SideNav from './SideNav';
import AppRouter from './AppRouter';


const MainLayout = () => {
    return (
        <StyledContainer>
            <SideNav />
            <AppRouter />
        </StyledContainer>
    )
}

export default MainLayout;

const StyledContainer = styled.main`
  display: flex;
  height: 100vh;
  overflow: hidden;
` 