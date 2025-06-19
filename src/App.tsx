// src/App.tsx
import { Link, Route, Routes } from 'react-router-dom';
import Introduction from './pages/About.tsx';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import { useEffect,useState } from 'react';
import { Toggle } from './components/Toggle.tsx'
import './App.css';



const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li><Link to="/">Introduction</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <Toggle
        isOn={darkMode}
        handleToggle={() => setDarkMode((prev) => !prev)}
      />

      </nav>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;