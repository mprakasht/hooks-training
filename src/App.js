import React from "react";

import "./App.css";
import BasicHooks from "./hooks/basicHook";
import { FormComponent } from "./hooks/formComponent";

function App() {
  return (
    <div className="App">
      <BasicHooks />

      <p>Form Component</p>
      <FormComponent />
    </div>
  );
}

export default App;
