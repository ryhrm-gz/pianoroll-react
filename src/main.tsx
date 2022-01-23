import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "./Editor";

ReactDOM.render(
  <React.StrictMode>
    <Editor numberBar={256} width={500} height={500} />
  </React.StrictMode>,
  document.getElementById("root")
);
