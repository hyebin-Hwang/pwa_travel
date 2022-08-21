import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Noto Sans KR;
    }
    body{
        height:100vh;
    }
    input{
        outline:none;
    }
    li{
        list-style:none;
    }
    button{
        outline:none;
        border:none;
    }
`;

export default GlobalStyle;
