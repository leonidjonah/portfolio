import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdc from "./components/pdc/Pdc";
import DetailleIndexGca from "./components/detailleProject/DetailleGca";
import DetailleGu from "./components/detailleProject/DetailleGu";
import DetailleSav from "./components/detailleProject/DetailleSav";
import DetailleClient from "./components/detailleProject/DetailleClient";
import DetailleMobileClient from "./components/detailleProject/DetailleMobileClient";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="detailleGca" element={<DetailleIndexGca />} />
        <Route path="detailleGu" element={<DetailleGu />} />
        <Route path="detailleSav" element={<DetailleSav />} />
        <Route path="detailleClient" element={<DetailleClient />} />
        <Route path="mobileClient" element={<DetailleMobileClient />} />
        <Route index element={<Pdc />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
