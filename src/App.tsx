import React from 'react';

import GlobalStyle from "./styles/global";

import { Login } from "./pages/Login";
import { AppProvider } from "./hooks/index";

function App() {
  return (
    <>
      <AppProvider>
        <Login/>
      </AppProvider>

      <GlobalStyle/>
    </>
  );
}

export default App;
