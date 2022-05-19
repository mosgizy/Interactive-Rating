import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }

    body{
        background-color:hsl(216,12%,8%) ;
        display:grid ;
        place-items:center ;
        min-height:100vh;
        padding-inline:1rem;
    }

    button{
        font-family:inherit ;
        cursor:pointer;
    }
`