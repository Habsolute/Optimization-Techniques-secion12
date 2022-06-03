import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setallowToggle] = useState(false);

  console.log("appRuning");

  const toggleParagraphHandler = useCallback(() => {
    console.log("click button");
    if (allowToggle) {
      setShowP((prevShowpP) => !prevShowpP);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setallowToggle(true);
  };

  // function toggleParagraphHandler() {
  //   console.log("button click");
  // }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
