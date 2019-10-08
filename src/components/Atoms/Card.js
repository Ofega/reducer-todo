import React from 'react';
import styled from 'styled-components';
// import { Icon } from 'semantic-ui-react';


const Card = ({ item }) => {
    return (
        <StyledContainer>
            <h1>{item.name}</h1>
        </StyledContainer>
    )
}

export default Card;

const StyledContainer = styled.div`

`