// src/App.tsx
import { Link, Route, Routes } from 'react-router-dom';
import Introduction from './pages/About.tsx';
import Projects from './pages/Projects_page.tsx';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { useEffect, useState } from 'react';
import { Toggle } from './components/Toggle.tsx';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';
import Block_Jump from './pages/projects/Block_Jump';
import Contact from './pages/Contact.tsx';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Fixed Navbar */}
      <nav className='navbar'>
        <ul className='nav-list'>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Toggle
          isOn={darkMode}
          handleToggle={() => setDarkMode((prev) => !prev)}
        />
      </nav>
      
      {/* Breadcrumbs directly below navbar */}
      <Box sx={{ position: 'fixed', top: '4vh', left: 0, right: 0, zIndex: 999 }}>
        <Breadcrumbs />
      </Box>
      
      {/* Main Content with proper spacing for navbar + breadcrumbs */}
      <Box sx={{ pt: '50px' }}>
        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/Block_Jump" element={<Block_Jump />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;