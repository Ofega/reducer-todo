import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';


const SideNav = () => {
    return (
        <StyledContainer>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="is-active">
                        <Icon name='home' />
                        <span>Home</span>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/account" activeClassName="is-active">
                        <Icon name='user' />
                        <span>Account</span>
                    </NavLink>
                </li>
            </ul>
        </StyledContainer>
    )
}

export default SideNav;


export const StyledContainer = styled.nav`
    display: flex;
    align-items: center;
    max-width: 250px;
    width: 100%
    height: 100vh;
    overflow: hidden;
    background: ${props => props.theme.primaryGrey};

    ul {
        min-height: 450px;
        width: 100%;

        a {
            display: flex;
            font-weight: ${props => props.theme.mediumWeight}
            padding: ${props => props.theme.spaceSmall} ${props => props.theme.spaceMedium};

            span {
                margin-left: ${props => props.theme.spaceSmall}
            }

            &:hover, &.is-active {
                color: ${props => props.theme.primaryColor};
            }
        }
    }
`