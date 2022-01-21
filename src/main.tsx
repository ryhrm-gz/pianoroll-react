import React from "react";
import ReactDOM from "react-dom";
import { PianoRoll } from "./PianoRoll";

ReactDOM.render(
  <React.StrictMode>
    <PianoRoll numberBar={256} width={600} height={500} />
  </React.StrictMode>,
  document.getElementById("root")
);
