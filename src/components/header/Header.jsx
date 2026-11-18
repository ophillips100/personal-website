import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <button className="main-btn" onClick={() => navigate('/')} aria-expanded="false">Owen Phillips</button>
      <nav className="nav">
        <button className="nav-btn" data-bs-toggle="menu" onClick={() => navigate('/projects')} aria-expanded="false">Projects</button>
        <button className="nav-btn" data-bs-toggle="menu" onClick={() => navigate('/resume')} aria-expanded="false">Resume</button>
        <button className="nav-btn" data-bs-toggle="menu" onClick={() => navigate('/about')} aria-expanded="false">About</button>
        <button className="nav-btn" data-bs-toggle="menu" onClick={() => navigate('/contact')} aria-expanded="false">Contact</button>
      </nav>
    </header>
  );
}

export default Header;