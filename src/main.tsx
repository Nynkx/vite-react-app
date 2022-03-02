import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Fallback: FC = function () {
  return (
    <>
      <div>Loading...</div>
    </>
  );
};

ReactDOM.render(
  <React.Suspense fallback={<Fallback />}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
