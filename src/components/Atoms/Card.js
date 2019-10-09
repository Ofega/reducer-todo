import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from './Title';
// import { Icon } from 'semantic-ui-react';


const Card = ({ todo }) => {
    return (
        <StyledContainer>
            <SectionTitle text={todo.name} />
            <ul>
                {
                    todo.tags.map(item => <li key={item.id}>{item.text}</li>)
                }
            </ul>
        </StyledContainer>
    )
}

export default Card;

const StyledContainer = styled.li`
    box-shadow: ${({ theme }) => theme.cardShadow};
    border-radius: ${({ theme }) => theme.primaryRadius};
    border: 2px solid ${({ theme }) => theme.primaryGrey};
    padding: ${({ theme }) => theme.spaceSmall};
    padding-bottom: 0;

    &:hover {
        box-shadow: ${({ theme }) => theme.cardShadowOnHover};
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            background: ${({ theme }) => theme.accentGrey};
            font-weight: ${({ theme }) => theme.mediumWeight};
            font-size: ${({ theme }) => theme.bodyFontSizeXS};
            margin-right: ${({ theme }) => theme.spaceSmall};
            margin-bottom: ${({ theme }) => theme.spaceSmall};
            padding: 0 ${({ theme }) => theme.spaceSmall};

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
`