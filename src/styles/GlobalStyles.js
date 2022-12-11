import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button{
    cursor: pointer;
   min-width: max-content;
}

body,button,input,select{
    font-family: 'Inter', sans-serif;
}

body{
    background-color: var(--color-grey-4);
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-negative: #E83F5B;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;

    --color-white: #FFFFFF;

    --radius-1: .4rem;

    --toastify-color-dark: #343B41;
    --toastify-text-color-dark: #F8F9FA;
    --toastify-font-family: 'Inter', sans-serif;
    --toastify-font-size: 2rem;

    font-size: 60%; 
}
@media(min-width: 700px){
    :root{
        font-size: 62.5%;
    }
}
`

export default GlobalStyle
