import React from "react";
import "./assets/css/styles.css";
import Add from "./pages/add.jsx";
import Header from "./pages/header";


import { MockupProvider } from "./context/mockupContext";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <MockupProvider>
        <Header />
        <Add />
      </MockupProvider>
    </div>
  );
}

export default App;
