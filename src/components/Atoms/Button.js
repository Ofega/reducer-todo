import React, { useContext } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import DashboardContext from '../../store/contexts/DashboardContext';


export const Button  = ({ text, icon, toggleModal }) => {

    const context = useContext(DashboardContext);

    return (
        <Btn onClick={context.toggleModal}>
            {icon ? <span>{text}</span> : text}
            {icon ? <Icon name={icon} /> : null}
        </Btn>
    )
}



const Btn = styled.button`
    cursor: pointer;
    border: none;
    background: ${({ theme }) => theme.accentGrey} none;
    min-height: 35px;
    min-width: 100px;
    font-size: 1.3rem;
    font-weight: ${({ theme }) => theme.boldWeight};
    text-align: center;
    border-radius: ${({ theme }) => theme.primaryRadius};
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
    user-select: none;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        color: ${({ theme }) => theme.white}
        background: ${({ theme }) => theme.primaryColor}
    }
`