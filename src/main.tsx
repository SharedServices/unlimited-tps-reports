import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  throw new Error("No root element found");
}

const domRoot = ReactDOM.createRoot(rootElement);

domRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
