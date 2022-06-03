import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);

  const toggleParagraphHandler = () => {
    console.log("click button");
    setShowP((prevShowpP) => !prevShowpP);
  };

  // function toggleParagraphHandler() {
  //   console.log("button click");
  // }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showP && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
