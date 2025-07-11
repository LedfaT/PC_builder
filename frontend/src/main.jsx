// src/index.js або src/main.js

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./contextProvider";
import "./app.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
