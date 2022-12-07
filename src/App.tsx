import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppProviders from "./providers/AppProviders";
import { MuiMode } from "./components/mui/muiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
