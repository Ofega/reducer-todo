import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.styles';


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: ${theme.baseFontSize};
    }

    body {
        font-size: ${theme.bodyFontSize};
        font-family: ${theme.bodyFont};
        background: ${theme.primaryBG}
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: ${theme.primaryBlack};
    }
`