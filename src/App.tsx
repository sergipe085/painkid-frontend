import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from "./styles/global";

import Routes from './routes';

import { AppProvider } from "./hooks/index";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </AppProvider>

      <ToastContainer/>
      <GlobalStyle/>
    </>
  );
}

export default App;
