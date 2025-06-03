// src/App.tsx
import { Link, Route, Routes } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Education from './pages/Education.tsx';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Passion from './pages/Passion';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Mark Gouzoulis Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Introduction</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/passion">Passion</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/passion" element={<Passion />} />
      </Routes>
    </div>
  );
};

export default App;
