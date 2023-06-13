import React from "react";
import { Routes, Route } from 'react-router-dom';
import MainContent from "./MainContent";
import MyProjects from "./MyProjects";
import Contact from "./Contact";
import './App.css';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/MyProjects" element={<MyProjects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesPages;
