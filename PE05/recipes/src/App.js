import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from "./pages/Home.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home /> }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
