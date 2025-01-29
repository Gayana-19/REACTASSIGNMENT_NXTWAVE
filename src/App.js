import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListsPage from "./components/ListsPage";
import ListCreationPage from "./components/ListCreationPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListsPage />} />
        <Route path="/create" element={<ListCreationPage />} />
      </Routes>
    </Router>
  );
};

export default App;