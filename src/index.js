import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import index from "Lesson3WK3React/index";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <index>
  </StrictMode>
);
