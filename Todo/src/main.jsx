import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./components/UserContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Update.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
