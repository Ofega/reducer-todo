import React, { useReducer } from 'react';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global.styles';
import { theme } from './styles/theme.styles';
import MainLayout from './components/Layout/MainLayout';
import { dashboardReducer, initialState } from './store/reducers/dashboard';
import { TOGGLE_MODAL } from './store/types/dashboard';
import DashboardContext from './store/contexts/DashboardContext';


const App = () => {

  const [dashboard, dispatch] = useReducer(dashboardReducer, initialState); 
  const { modalToggled, todos } = dashboard;

  const toggleModal = () => {
    dispatch({
      type: TOGGLE_MODAL
    })
  }

  const addTodo = ({name, tags}) => {
    dispatch({
      type: TOGGLE_MODAL,
      payload: {
        name: name,
        tags: tags.split(',')
      }
    })
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <DashboardContext.Provider value={{ modalToggled, todos, toggleModal, addTodo }}>
          <GlobalStyles />
          <MainLayout />
        </DashboardContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
