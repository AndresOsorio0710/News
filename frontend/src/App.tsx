import React from "react";
import Master from "./components/master";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Master />
      </BrowserRouter>
    </div>
  );
}

export default App;
