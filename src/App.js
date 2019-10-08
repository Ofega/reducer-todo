import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global.styles';
import { theme } from './styles/theme.styles';
import MainLayout from './components/Layout/MainLayout';


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
