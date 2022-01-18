import React from "react";
import ReactDOM from "react-dom";
import { PianoRoll } from "./PianoRoll";

ReactDOM.render(
  <React.StrictMode>
    <PianoRoll barNumber={32} />
  </React.StrictMode>,
  document.getElementById("root")
);
