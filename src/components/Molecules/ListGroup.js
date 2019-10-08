import React from 'react';
import styled from 'styled-components';
import Card from '../Atoms/Card';
import { SectionTitle } from '../Atoms/Title';


export const CardListGroup = ({ array, text }) => {
    return (
        <StyledContainer>
            <SectionTitle text={text} />
            <ul>
                {
                    array.map(item => {
                        return (
                            <Card item={item} />
                        )
                    })
                }
            </ul>
        </StyledContainer>
    )
}


const StyledContainer = styled.div`

`