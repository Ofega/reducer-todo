import React from 'react';
import styled from 'styled-components';
import { SiteTitle } from '../components/Atoms/Title';
// import { CardListGroup } from '../components/Molecules/ListGroup';


const Dashboard = () => {
    return (
        <StyledContainer>
            <ListContainer>
                <SiteTitle text='Projects' />
                {/* <CardListGroup text='Active Projects' />
                <CardListGroup text='Other Ptojects' /> */}
            </ListContainer>
            <DescContainer>

            </DescContainer>
        </StyledContainer>
    )
}

export default Dashboard;

const StyledContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
` 

const ListContainer= styled(StyledContainer)`
    flex-direction: column;
    max-width: 550px;
    box-shadow: inset -10px 0px 20px 0px rgba(0,0,0,0.02);
    padding: ${props => props.theme.spaceMedium};

    ul {
        border: 2px solid red;
        margin-top: ${props => props.theme.spaceLarge}
    }
`

const DescContainer = styled(StyledContainer)`
    padding: ${props => props.theme.spaceMedium};
`
