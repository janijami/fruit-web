import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './i18n';





// Glavna stranica i podstranice
import App from "./App";
import BlueberryPage from "./pages/BlueberryPage";
import PineapplePage from "./pages/PineapplePage";
import StrawberryPage from "./pages/StrawberryPage";
import GrapesPage from "./pages/GrapesPage";
import BananaPage from "./pages/BananaPage";

// Renderanje aplikacije
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blueberry" element={<BlueberryPage />} />
          <Route path="/pineapple" element={<PineapplePage />} />
          <Route path="/strawberry" element={<StrawberryPage />} />
          <Route path="/grapes" element={<GrapesPage />} />
          <Route path="/banana" element={<BananaPage />} />
        </Routes>
      </BrowserRouter>
   
  </React.StrictMode>
);
