import React from "react";
import ReactDOM from "react-dom";
import { PianoRoll } from "./PianoRoll";

ReactDOM.render(
  <React.StrictMode>
    <PianoRoll barNumber={4} width={600} height={500} />
  </React.StrictMode>,
  document.getElementById("root")
);
