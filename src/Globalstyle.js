import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *::before, *::after {
        box-sizing: inherit;
        font-family: "Poppins"
    }
    body{
        background: #E5E5E5;
    }
`

export default GlobalStyle;