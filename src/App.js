import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// SECTIONS
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';

// PAGES
import Profile from './components/About';
import Projects from './components/Projects';
import About from './components/About'

function App() {
  const [showMenu, setShowMenu] = useState(false);  

  return (
    <Router>
      {showMenu &&
      <MobileMenu
        setShowMenu={setShowMenu}
      />}
      <div className="main-wrap">
        <Header
          setShowMenu={setShowMenu}
        />
        
        <div>
          <Routes>
            <Route path="/" element={<Profile/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="resume" element={<About/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
