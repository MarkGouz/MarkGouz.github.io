// src/App.tsx
import { Link, Route, Routes } from 'react-router-dom';
import Introduction from './pages/About.tsx';
import Projects from './pages/Projects_page.tsx';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { useEffect,useState } from 'react';
import { Toggle } from './components/Toggle.tsx'
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';
import Block_Jump from './pages/projects/Block_Jump';
import AppBar from '@mui/material/AppBar';

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
        <AppBar>hello</AppBar>
        <Toggle
        isOn={darkMode}
        handleToggle={() => setDarkMode((prev) => !prev)}
      />
      </nav>
      
      {/* Breadcrumbs */}
      <Breadcrumbs />
      
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/Block_Jump" element={<Block_Jump />} />
      </Routes>
    </div>
  );
};

export default App;