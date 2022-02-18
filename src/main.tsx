import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "./components/Editor";

ReactDOM.render(
  <React.StrictMode>
    <Editor numberBar={256} width={1600} />
  </React.StrictMode>,
  document.getElementById("root")
);
