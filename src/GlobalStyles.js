import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Poppins', sans-serif;
    }

    * {
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        margin: 0 auto;
        max-width: 1440px;
    }
`