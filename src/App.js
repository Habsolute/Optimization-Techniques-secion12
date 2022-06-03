import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);

  console.log("appRuning");

  const toggleParagraphHandler = () => {
    // console.log("click button");
    setShowP((prevShowpP) => !prevShowpP);
  };

  // function toggleParagraphHandler() {
  //   console.log("button click");
  // }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
