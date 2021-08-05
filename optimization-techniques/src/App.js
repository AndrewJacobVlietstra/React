import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/DemoOutput/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('App Rendered!');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={() => setShowParagraph(!showParagraph)}>
        Show Paragraph!
      </Button>
    </div>
  );
}

export default App;
