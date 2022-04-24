import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    
    body {
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
    }

    h1 {
        margin: 0.67em 0;
    }

    h2 {
        margin: 0.83em 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
        margin: 1em 0px;
    }

    img{
        max-width: 100%;
}
`;

export default GlobalStyles;
