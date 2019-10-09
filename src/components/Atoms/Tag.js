import React from 'react';
import styled from 'styled-components';


const Tag = ({ text }) => {
    return (
        <StyledTag>{text}</StyledTag>
    )
}

export default Tag;

const StyledTag = styled.li`
    background: #ddd;
    font-size: ${({ theme }) => theme.bodyFontSizeXS};
    margin-right: ${({ theme }) => theme.spaceSmall};
    margin-bottom: ${({ theme }) => theme.spaceSmall};
    padding: 0 ${({ theme }) => theme.spaceSmall};

    &:last-of-type {
        margin-right: 0;
    }
`