import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Owen Phillips</h1>
      <nav className="nav">
        <button className="nav-btn" data-bs-toggle="menu" href="#" aria-expanded="false">Projects</button>
        <button className="nav-btn" data-bs-toggle="menu" href="#" aria-expanded="false">Resume</button>
        <button className="nav-btn" data-bs-toggle="menu" href="#" aria-expanded="false">About</button>
        <button className="nav-btn" data-bs-toggle="menu" href="#" aria-expanded="false">Contact</button>
      </nav>
    </header>
  );
}

export default Header;