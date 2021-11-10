import React from "react";
import Master from "./components/master";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Theme from "./temaConfig";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Master />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
