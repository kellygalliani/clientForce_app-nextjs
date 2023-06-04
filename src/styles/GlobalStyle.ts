import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-brand-1: #FD3F6C ;
    --color-brand-2: #7A4CFC;
    --color-gray-900: #212121;
    --color-gray-800: #424242;
    --color-gray-700: #616161;
    --color-gray-600: #757575;
    --color-gray-500: #9e9e9e;
    --color-gray-400: #bdbdbd;
    --color-gray-300: #E9E9E9;
    --color-gray-200: #F6F6F6;
    --color-gray-100: #fff;

    font-size: 60%; 
  }

  
  @media (min-width: 700px) {
      :root {
          font-size: 62.5%; // root font-size: 10px = 1 rem 
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-100);
    color: var(--color-gray-800);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  .container{
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
