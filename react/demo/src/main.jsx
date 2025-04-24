
import React from "react";
import { createRoot } from "react-dom/client";
import './components/InfinityEffect.css';
import InfinityEffect from './components/InfinityEffect.jsx';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfinityEffect />
  </React.StrictMode>
);
