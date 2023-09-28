import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AboutMe } from './page/aboutMe';
import { Resume } from './page/resume';
import { Projects } from './page/projects';
import { Contact } from './page/contact';
import { Home } from './page/home';
import { Bar } from './bar/bar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__bar">
        <Bar />
      </div>
      <div className="app__middle">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="app__footer">footer</div>
    </div>
  );
}

export default App;
