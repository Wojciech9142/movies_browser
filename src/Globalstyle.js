import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *::before, *::after {
        box-sizing: inherit;
        font-family: "Poppins"
    }
`

export default GlobalStyle;