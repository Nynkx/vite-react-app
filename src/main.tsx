import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.Suspense fallback={() => <></>}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
