import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto,sans-serif;
  }

  html{ 
      font-size: 16px;
  }

  body{
    background: #f2f5f7;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #e0e0e0; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #0C70BD; 
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #003C72; 
  }
`;
 
export default GlobalStyle;