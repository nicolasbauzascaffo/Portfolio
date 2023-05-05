import { useState } from "react";
import Home from "./pages/home";
import "./App.css";
import Notfound from "./pages/notfound";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
