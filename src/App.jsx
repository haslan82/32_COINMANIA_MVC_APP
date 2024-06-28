import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./view/LoginPage";
import HeaderView from "./view/HeaderView";
import MainPageView from "./view/MainPageView";

const App = () => {
  return (
    <BrowserRouter>
    <HeaderView />
      <Routes>
      <Route path="/" element={< LoginPage />} />
      <Route path="/home" element={< MainPageView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;