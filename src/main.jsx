import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";
import Doodle from "@components/Doodle.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
    <Doodle />
  </StrictMode>
);
